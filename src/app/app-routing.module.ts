import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZipCodeComponent } from './components/zip-code/zip-code.component';
import { FiveDayForecastComponent } from './components/five-day-forecast/five-day-forecast.component';


const routes: Routes = [
  { path: '', component: ZipCodeComponent },
  { path: 'forecast/:zipcode', component: FiveDayForecastComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
