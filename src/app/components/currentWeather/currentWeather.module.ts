import { NgModule } from '@angular/core';
import { WeatherConditionsPipe } from 'src/app/pipes/weatherConditions.pipe';
import { CurrentWeatherComponent } from './currentWeather.component';

@NgModule({
    declarations: [CurrentWeatherComponent, WeatherConditionsPipe],
    exports: [CurrentWeatherComponent],
})
export class CurrentWeatherModule {}
