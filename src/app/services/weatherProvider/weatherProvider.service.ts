import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Subject } from 'rxjs';
import {
    CurrentWeatherResponse,
    DailyWeatherResponse,
    GeoParamsOutput,
} from 'src/app/types/types';
import { CurrentWeatherModel } from 'src/app/models/currentWeather.model';
import { DailyWeatherModel } from 'src/app/models/dailyWeather.model';

@Injectable()
export class WeatherProviderService {
    private readonly apiUrl = 'https://api.open-meteo.com/v1/forecast';

    currentWeather = new Subject<CurrentWeatherModel>();
    dailyWeather = new Subject<DailyWeatherModel>();

    constructor(private http: HttpClient) {}

    private buildUrlWithParams(params: GeoParamsOutput, currentWeather = true) {
        const urlMain = `${this.apiUrl}?latitude=${params.latitude}&longitude=${params.longitude}`;
        if (currentWeather) {
            return `${urlMain}&current_weather=true`;
        } else {
            return `${urlMain}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=UTC`;
        }
    }

    geoDataChange(params: GeoParamsOutput) {
        this.getCurrentWeather(params).subscribe((r) =>
            this.currentWeather.next(r)
        );
        this.getDailyWeather(params).subscribe((r) =>
            this.dailyWeather.next(r)
        );
    }

    getCurrentWeather(params: GeoParamsOutput) {
        const url = this.buildUrlWithParams(params);
        return this.http.get<CurrentWeatherResponse>(url).pipe(
            filter((r) => !!r.current_weather),
            map(
                ({ current_weather }) =>
                    new CurrentWeatherModel(current_weather)
            )
        );
    }

    getDailyWeather(params: GeoParamsOutput) {
        const url = this.buildUrlWithParams(params, false);
        return this.http.get<DailyWeatherResponse>(url).pipe(
            filter((r) => !!r.daily),
            map(({ daily }) => new DailyWeatherModel(daily))
        );
    }
}
