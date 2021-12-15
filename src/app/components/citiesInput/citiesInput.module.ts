import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CitiesInputComponent } from './citiesInput.component';

@NgModule({
    declarations: [CitiesInputComponent],
    imports: [CommonModule],
    exports: [CitiesInputComponent],
})
export class CitiesInputModule {}
