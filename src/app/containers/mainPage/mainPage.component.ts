import { Component } from '@angular/core';
import { GeoParamsOutput } from 'src/app/types/types';

@Component({
    selector: 'main-page',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.scss'],
})
export class MainPageComponent {
    geoData: GeoParamsOutput = {
        latitude: 0,
        longitude: 0,
    };

    clearData = false;

	setData(params: GeoParamsOutput) {
		this.geoData = params;
	}

    clearAll() {
        this.geoData = {
            latitude: 0,
            longitude: 0
        };
    }
}
