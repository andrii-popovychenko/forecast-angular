import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgFormsModule } from 'src/app/ngforms.module';
import { WeatherConditionsPipe } from 'src/app/pipes/weatherConditions.pipe';
import { CurrentWeatherComponent } from './currentWeather.component';

@NgModule({
    declarations: [CurrentWeatherComponent, WeatherConditionsPipe],
    imports: [CommonModule, NgFormsModule],
    exports: [CurrentWeatherComponent],
})
export class CurrentWeatherModule {}
