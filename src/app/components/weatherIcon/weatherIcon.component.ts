import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { WeatherPresentation } from 'src/app/constants/weatherPresentation';

@Component({
    selector: 'weather-icon',
    templateUrl: './weatherIcon.component.html',
    styleUrls: ['./weatherIcon.component.scss'],
})
export class WeatherIconComponent implements OnChanges, OnInit {
    @Input()
    weatherCode: number = 0;

    @Input()
    color: string = 'currentColor';

    @Input()
    width: string = '16';

    @Input()
    height: string = '16';

    class = '';
    paths: string[] = [];

    ngOnInit() {
        this.update(this.weatherCode);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['weatherCode'] && !changes['weatherCode'].firstChange) {
            const code: number = changes['weatherCode'].currentValue;
            this.update(code);
        }
    }

    private update(code: number) {
        if (WeatherPresentation.has(code)) {
            const weatherPresentation = WeatherPresentation.get(code);
            this.class = weatherPresentation?.class || '';
            this.paths = weatherPresentation?.paths || [];
        }
    }
}
