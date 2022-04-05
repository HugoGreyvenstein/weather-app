import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipCodeComponent } from './components/zip-code/zip-code.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { FiveDayForecastComponent } from './components/five-day-forecast/five-day-forecast.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ZipCodeComponent,
    WeatherItemComponent,
    FiveDayForecastComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
