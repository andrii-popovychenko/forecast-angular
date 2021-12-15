import { Component, EventEmitter, Input, Output } from "@angular/core";
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

    inputResult = new EventEmitter<string>();
    selectedCity: GeoSearchModel = new GeoSearchModel();

    selectCity(city: GeoSearchModel) {
        this.selectedCity = city;
        this.select.emit(city);
        this.citiesList = [];
    }
}