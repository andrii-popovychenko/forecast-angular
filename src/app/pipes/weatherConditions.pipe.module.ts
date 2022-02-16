import { NgModule } from '@angular/core';
import { WeatherConditionsPipe } from './weatherConditions.pipe';

@NgModule({
    declarations: [WeatherConditionsPipe],
    exports: [WeatherConditionsPipe],
})
export class WeatherConditionsPipeModule {}
