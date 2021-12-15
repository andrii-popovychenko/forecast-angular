import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Subject } from 'rxjs';
import { CurrentWeatherResponse, GeoParamsOutput } from 'src/app/types/types';
import { CurrentWeatherModel } from 'src/app/models/currentWeather.model';

@Injectable()
export class WeatherProviderService {
    private readonly apiUrl = 'https://api.open-meteo.com/v1/forecast';

    currentWeather = new Subject<CurrentWeatherModel>();

    constructor(private http: HttpClient) {}

    geoDataChange(params: GeoParamsOutput) {
        this.getCurrentWeather(params).subscribe((r) =>
            this.currentWeather.next(r)
        );
    }

    getCurrentWeather(params: GeoParamsOutput) {
        const url = `${this.apiUrl}?latitude=${params.latitude}&longitude=${params.longitude}&current_weather=true`;
        return this.http.get<CurrentWeatherResponse>(url).pipe(
            filter((r) => !!r.current_weather),
            map(
                ({ current_weather }) =>
                    new CurrentWeatherModel(current_weather)
            )
        );
    }
}
