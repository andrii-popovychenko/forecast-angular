import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentWeatherModel } from 'src/app/models/currentWeather.model';
import { DailyWeatherModel } from 'src/app/models/dailyWeather.model';
import { WeatherProviderService } from 'src/app/services/weatherProvider/weatherProvider.service';
import { GeoParamsOutput } from 'src/app/types/types';

@Component({
    selector: 'main-page',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
    geoData: GeoParamsOutput = {
        latitude: 0,
        longitude: 0,
    };
    cityCleared = true;
    currentWeather$ = new Subscription();
    dailyWeather$ = new Subscription();

    currentWeather = new CurrentWeatherModel();
    dailyWeather = new DailyWeatherModel();

    constructor(private weatherService: WeatherProviderService) {}

    ngOnInit(): void {
        this.currentWeather$ = this.weatherService.currentWeather.subscribe(
            (r) => (this.currentWeather = r)
        );
        this.dailyWeather$ = this.weatherService.dailyWeather.subscribe(
            (r) => (this.dailyWeather = r)
        );
    }

    setData(params: GeoParamsOutput) {
        this.geoData = params;
        this.weatherService.geoDataChange(params);
        this.cityCleared = false;
    }

    clearAll() {
        this.geoData = {
            latitude: 0,
            longitude: 0,
        };
        this.cityCleared = true;
    }

    ngOnDestroy(): void {
        this.currentWeather$.unsubscribe();
        this.dailyWeather$.unsubscribe();
    }
}
