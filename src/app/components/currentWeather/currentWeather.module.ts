import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgFormsModule } from 'src/app/ngforms.module';
import { WeatherConditionsPipeModule } from 'src/app/pipes/weatherConditions.pipe.module';
import { WeatherIconModule } from '../weatherIcon/weatherIcon.module';
import { CurrentWeatherComponent } from './currentWeather.component';

@NgModule({
    declarations: [CurrentWeatherComponent],
    imports: [
        CommonModule,
        NgFormsModule,
        WeatherConditionsPipeModule,
        WeatherIconModule,
    ],
    exports: [CurrentWeatherComponent],
})
export class CurrentWeatherModule {}
