import { Pipe, PipeTransform } from "@angular/core";

const WeatherConditionCodes = new Map<number, string>([
    [0, 'Clear sky'],
    [1, 'Mainly clear'],
    [2, 'Partly cloudy'],
    [3, 'Overcast'],
    [45, 'Fog'],
    [48, 'Depositing rime fog'],
    [51, 'Drizzle: light'],
    [53, 'Drizzle: moderate'],
    [55, 'Drizzle: dense intensity'],
    [56, 'Freezing Drizzle: light'],
    [57, 'Freezing Drizzle: dense intensity'],
    [61, 'Rain: slight'],
    [63, 'Rain: moderate'],
    [65, 'Rain: heavy intensity'],
    [66, 'Freezing Rain: light'],
    [67, 'Freezing Rain: heavy intensity'],
    [71, 'Snow fall: slight'],
    [73, 'Snow fall: moderate'],
    [75, 'Snow fall: heavy intensity'],
    [77, 'Snow grains'],
    [80, 'Rain showers: slight'],
    [81, 'Rain showers: moderate'],
    [82, 'Rain showers: violent'],
    [85, 'Snow showers slight'],
    [86, 'Snow showers slight heavy'],
    [95, 'Thunderstorm: Slight or moderate'],
    [96, 'Thunderstorm with slight hail'],
    [99, 'Thunderstorm with heavy hail'],
]);

@Pipe({
    name: 'weatherConditions'
})
export class WeatherConditionsPipe implements PipeTransform {
    transform(code: number) {
        if (WeatherConditionCodes.has(code)) {
            return WeatherConditionCodes.get(code)
        } else {
            return `Conditions for code ${code} not found!`;
        };
    }
}