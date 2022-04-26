import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherIconComponent } from './weatherIcon.component';

@NgModule({
    declarations: [WeatherIconComponent],
    imports: [BrowserModule],
    exports: [WeatherIconComponent],
})
export class WeatherIconModule {}
