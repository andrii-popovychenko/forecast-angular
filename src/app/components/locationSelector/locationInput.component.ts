import {
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import {
    debounceTime,
    Subject,
    filter,
    distinctUntilChanged,
    Subscription,
} from 'rxjs';
import { GeoSearchModel } from 'src/app/models/geoSearch.model';
import { CitiesGeoSearchService } from 'src/app/services/citiesGeoSearch/citiesGeoSearch.service';
import { GeoParamsOutput } from 'src/app/types/types';

@Component({
    selector: 'location-input',
    templateUrl: './locationInput.component.html',
    styleUrls: ['./locationInput.component.scss'],
})
export class LocationInputComponent implements OnInit, OnDestroy {
    @Output()
    citySelect = new EventEmitter<GeoParamsOutput>();

    searchTextUpdate = new Subject<string>();
    cities: GeoSearchModel[] = [];
    latitude = 0;
    longitude = 0;
    searchSub = new Subscription();

    constructor(private citiesSearch: CitiesGeoSearchService) {}

    ngOnInit(): void {
        this.searchSub = this.searchTextUpdate
            .pipe(
                debounceTime(300),
                filter((result: string) => !!result),
                distinctUntilChanged()
            )
            .subscribe((result) => this.search(result));
    }

    ngOnDestroy(): void {
        this.searchSub.unsubscribe();
    }

    search(text: string) {
        this.citiesSearch
            .search(text)
            .subscribe((result) => (this.cities = result));
    }

    setGeoData(city: GeoSearchModel) {
        if (city) {
            this.latitude = city.latitude;
            this.longitude = city.longitude;
        } else {
            this.latitude = 0;
            this.longitude = 0;
        }
        const output: GeoParamsOutput = {
            latitude: this.latitude,
            longitude: this.longitude,
        };
        this.citySelect.emit(output);
        this.cities = [];
    }

    click(value: any) {
        console.log(value);
    }
}
