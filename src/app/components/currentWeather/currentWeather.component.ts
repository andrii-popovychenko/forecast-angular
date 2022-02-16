import {
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentWeatherModel } from 'src/app/models/currentWeather.model';
import { WeatherProviderService } from 'src/app/services/weatherProvider/weatherProvider.service';
import { GeoParamsOutput } from 'src/app/types/types';

@Component({
    selector: 'current-weather',
    templateUrl: './currentWeather.component.html',
})
export class CurrentWeatherComponent implements OnInit, OnChanges, OnDestroy {
    @Input()
    data: GeoParamsOutput = {
        latitude: 0,
        longitude: 0,
    };

    currentWeather: CurrentWeatherModel = new CurrentWeatherModel();
    private weatherSub = new Subscription();
    isEmptyData = false;

    constructor(private weatherService: WeatherProviderService) {}

    ngOnInit(): void {
        this.isEmptyData = true;
        this.weatherSub = this.weatherService.currentWeather.subscribe(
            (r) => (this.currentWeather = r)
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes['data'].isFirstChange()) {
            const data: GeoParamsOutput = {
                latitude: changes['data'].currentValue.latitude || 0,
                longitude: changes['data'].currentValue.longitude || 0,
            };
            this.isEmptyData = data.latitude === 0 && data.longitude === 0;
            this.weatherService.geoDataChange(data);
        }
    }

    ngOnDestroy(): void {
        this.weatherSub.unsubscribe();
    }
}
