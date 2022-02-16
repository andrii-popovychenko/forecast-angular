import { CurrentWeatherModel } from '../models/currentWeather.model';

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
