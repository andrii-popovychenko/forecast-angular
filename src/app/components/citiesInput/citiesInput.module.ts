import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgFormsModule } from 'src/app/ngforms.module';
import { CitiesInputComponent } from './citiesInput.component';

@NgModule({
    declarations: [CitiesInputComponent],
    imports: [CommonModule, NgFormsModule],
    exports: [CitiesInputComponent],
})
export class CitiesInputModule {}
