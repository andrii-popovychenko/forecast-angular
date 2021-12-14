import { Component } from '@angular/core';
import { debounceTime, Subject, filter, distinctUntilChanged } from 'rxjs';
import { GeoSearchModel } from 'src/app/models/response/geoSearch.model';
import { CitiesGeoSearchService } from 'src/app/services/citiesGeoSearch/citiesGeoSearch.service';

@Component({
    selector: 'location-input',
    templateUrl: './locationInput.component.html',
    styleUrls: ['./locationInput.component.scss'],
})
export class LocationInputComponent {
    searchTextUpdate = new Subject<string>();
    cities: GeoSearchModel[] = [];
	latitude = 0;
	longitude = 0;

    constructor(private citiesSearch: CitiesGeoSearchService) {
        this.searchTextUpdate
            .pipe(
                debounceTime(300),
                filter((result: string) => !!result),
                distinctUntilChanged()
            )
            .subscribe((result) => this.search(result));
    }

    search(text: string) {
        this.citiesSearch
            .search(text)
            .subscribe((result) => (this.cities = result));
    }

	setGeoData(cityName: string) {
		const city = this.cities.find(({ name }) => name === cityName);
		if (city) {
			this.latitude = city.latitude;
			this.longitude = city.longitude;
		} else {
			this.latitude = 0;
			this.longitude = 0;
		}
	}
}
