import { CurrentWeatherModel } from '../models/currentWeather.model';
import { DailyWeatherModel } from '../models/dailyWeather.model';

export type GeoParamsOutput = {
    latitude: number;
    longitude: number;
};

export type GeoSearch = {
    results: {}[];
};

export type CurrentWeatherResponse = {
    current_weather: CurrentWeatherModel;
};

export type DailyWeatherResponse = {
    daily: DailyWeatherModel;
}
