import { NgModule } from '@angular/core';
import { CurrentWeatherModule } from 'src/app/components/currentWeather/currentWeather.module';
import { DailyWeatherModule } from 'src/app/components/dailyWeather/dailyWeather.module';
import { HeaderModule } from 'src/app/components/header/header.component.module';
import { LocationInputModule } from 'src/app/components/locationSelector/locationInput.module';
import { WeatherProviderModule } from 'src/app/services/weatherProvider/weatherProvider.module';
import { WeatherProviderService } from 'src/app/services/weatherProvider/weatherProvider.service';
import { MainPageComponent } from './mainPage.component';

@NgModule({
    declarations: [MainPageComponent],
    imports: [
        HeaderModule,
        LocationInputModule,
        CurrentWeatherModule,
        WeatherProviderModule,
        DailyWeatherModule,
    ],
    exports: [MainPageComponent],
    providers: [WeatherProviderService],
})
export class MainPageModule {}
