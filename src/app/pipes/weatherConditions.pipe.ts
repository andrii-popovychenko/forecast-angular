import { Pipe, PipeTransform } from '@angular/core';
import { WeatherPresentation } from '../constants/weatherPresentation';

@Pipe({
    name: 'weatherConditions',
})
export class WeatherConditionsPipe implements PipeTransform {
    transform(code: number) {
        if (WeatherPresentation.has(code)) {
            return WeatherPresentation.get(code)?.name;
        } else {
            return `Conditions for code ${code} not found!`;
        }
    }
}
