import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { GeoSearchModel } from "src/app/models/geoSearch.model";

@Component({
    selector: "cities-input",
    templateUrl: "./citiesInput.component.html",
    styleUrls: ["./citiesInput.component.scss"]
})
export class CitiesInputComponent {
    @Input()
    citiesList: GeoSearchModel[] = [];

    @Output()
    text = new EventEmitter<string>();

    @Output()
    select = new EventEmitter<GeoSearchModel>();

    @Output()
    clearData = new EventEmitter<boolean>();

    inputResult = new EventEmitter<string>();
    city = '';
    selectedCity: GeoSearchModel = new GeoSearchModel();

    selectCity(city: GeoSearchModel) {
        this.selectedCity = city;
        this.city = city.name;
        this.select.emit(city);
        this.citiesList = [];
    }

    clearInput() {
        this.city = '';
        this.citiesList = [];
        this.clearData.emit(true);
    }
}