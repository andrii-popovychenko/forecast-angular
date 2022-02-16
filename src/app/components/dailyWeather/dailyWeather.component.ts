import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { DailyWeatherModel } from "src/app/models/dailyWeather.model";

type DisplayedData = {
    date: string;
    min: string;
    max: string;
    condition: number
}

@Component({
    selector: 'daily-weather',
    templateUrl: './dailyWeather.component.html',
    styleUrls: ['./dailyWeather.component.scss']
})
export class DailyWeatherComponent {
    private _dailyWeather = new DailyWeatherModel();
    displayedData: DisplayedData[] = [];
    
    @Input()
    set dailyWeather(value: DailyWeatherModel) {
        this._dailyWeather = value;
        this.displayedData = this.initData(value);
    }

    @Input()
    hideInfo = true;

    get dailyWeather() {
        return this._dailyWeather;
    }

    private initData(data: DailyWeatherModel) {
        const result: DisplayedData[] = [];
        for (let i = 0; i <=6; i++) {
            result.push({
                date: data.time[i],
                min: data.temperature_2m_min[i],
                max: data.temperature_2m_max[i],
                condition: Number(data.weathercode[i])
            });
        }
        return result;
    }
}