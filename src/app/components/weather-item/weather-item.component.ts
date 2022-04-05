import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Conditions } from '../../models/conditions';
import { ImagesService } from '../../services/images.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  @Input()
  zipCode: string;

  @Output()
  removeWeatherItem = new EventEmitter();

  @Output()
  initializationFailure = new EventEmitter();

  @Output()
  initializationSuccess = new EventEmitter();

  conditions: Conditions;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getGetWeatherByZipCode(this.zipCode).subscribe({
      next: conditions => this.conditions = conditions,
      error: err => {
        console.error('error fetching weather', err);
        this.initializationFailure.emit(this.zipCode);
      },
      complete: () => this.initializationSuccess.emit(this.zipCode)
    });
  }

  closeWeatherItem() {
    this.removeWeatherItem.emit(this.zipCode);
  }
}
