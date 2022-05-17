import { Component, Input } from '@angular/core';
import { CurrentWeatherModel } from 'src/app/models/currentWeather.model';

@Component({
    selector: 'current-weather',
    templateUrl: './currentWeather.component.html',
    styleUrls: ["./currentWeather.component.scss"]
})
export class CurrentWeatherComponent {
    @Input()
    currentWeather: CurrentWeatherModel = new CurrentWeatherModel();

    @Input()
    hideInfo = true;
}
