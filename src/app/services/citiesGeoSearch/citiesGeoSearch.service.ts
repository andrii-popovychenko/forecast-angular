import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter } from 'rxjs';
import { GeoSearchRequestModel } from 'src/app/models/geoSearchRequest.model';
import { GeoSearchModel } from 'src/app/models/geoSearch.model';
import { GeoSearch } from 'src/app/types/types';

@Injectable()
export class CitiesGeoSearchService {
    private readonly apiUrl = 'https://geocoding-api.open-meteo.com/v1/search';
    private defaultCount = 10;

    constructor(private http: HttpClient) {}

    search(text: string): Observable<GeoSearchModel[]> {
        const reqModel = new GeoSearchRequestModel({ name: text, count: this.defaultCount });
        return this.http.get<GeoSearch>(`${this.apiUrl}${reqModel.url}`).pipe(
            filter((r) => !!r.results),
            map(({ results }) =>
                results.map((item) => new GeoSearchModel(item))
            )
        );
    }
}
