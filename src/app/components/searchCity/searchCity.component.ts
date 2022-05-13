import { Component } from '@angular/core';

@Component({
    selector: 'search-city',
    templateUrl: './searchCity.component.html',
    styleUrls: ['./searchCity.component.scss'],
})
export class SearchCity {

    searchOpened = false;

    showInput() {
        this.searchOpened = !this.searchOpened;
    }

}
