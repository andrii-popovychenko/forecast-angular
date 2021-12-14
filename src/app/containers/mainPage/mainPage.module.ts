import { NgModule } from '@angular/core';
import { LocationInputModule } from 'src/app/components/locationSelector/locationInput.module';
import { MainPageComponent } from './mainPage.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [LocationInputModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
