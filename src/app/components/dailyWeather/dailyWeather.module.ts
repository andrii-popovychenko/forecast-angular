import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgFormsModule } from 'src/app/ngforms.module';
import { WeatherConditionsPipeModule } from 'src/app/pipes/weatherConditions.pipe.module';
import { DailyWeatherComponent } from './dailyWeather.component';

@NgModule({
    declarations: [DailyWeatherComponent],
    imports: [NgFormsModule, CommonModule, WeatherConditionsPipeModule],
    exports: [DailyWeatherComponent],
})
export class DailyWeatherModule {}
