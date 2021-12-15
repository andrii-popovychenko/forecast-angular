import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CitiesGeoSearchModule } from 'src/app/services/citiesGeoSearch/citiesGeoSearch.module';
import { CitiesGeoSearchService } from 'src/app/services/citiesGeoSearch/citiesGeoSearch.service';
import { CitiesInputModule } from '../citiesInput/citiesInput.module';
import { LocationInputComponent } from './locationInput.component';

@NgModule({
    imports: [
        CommonModule,
        CitiesGeoSearchModule,
        CitiesInputModule
    ],
    declarations: [LocationInputComponent],
    exports: [LocationInputComponent],
    providers: [CitiesGeoSearchService],
})
export class LocationInputModule {}
