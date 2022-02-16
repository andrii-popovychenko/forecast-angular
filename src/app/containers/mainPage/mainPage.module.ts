import { NgModule } from '@angular/core';
import { CurrentWeatherModule } from 'src/app/components/currentWeather/currentWeather.module';
import { LocationInputModule } from 'src/app/components/locationSelector/locationInput.module';
import { WeatherProviderModule } from 'src/app/services/weatherProvider/weatherProvider.module';
import { WeatherProviderService } from 'src/app/services/weatherProvider/weatherProvider.service';
import { MainPageComponent } from './mainPage.component';

@NgModule({
    declarations: [MainPageComponent],
    imports: [LocationInputModule, CurrentWeatherModule, WeatherProviderModule],
    exports: [MainPageComponent],
    providers: [WeatherProviderService]
})
export class MainPageModule {}
