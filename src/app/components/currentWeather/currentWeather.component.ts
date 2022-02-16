import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { CurrentWeatherModel } from 'src/app/models/currentWeather.model';

@Component({
    selector: 'current-weather',
    templateUrl: './currentWeather.component.html',
})
export class CurrentWeatherComponent {
    @Input()
    currentWeather: CurrentWeatherModel = new CurrentWeatherModel();

    @Input()
    hideInfo = true;
}
