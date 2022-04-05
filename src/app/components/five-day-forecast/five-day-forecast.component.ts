import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conditions } from '../../models/conditions';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {

  conditions: Conditions[];
  cityName: string;
  forecastError: string;

  constructor(private router: Router, private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let zoneId = params.get('zipcode');
      this.weatherService.getFiveDayForcast(zoneId).subscribe({
        next: conditions => {
          this.cityName = conditions[0].name;
          this.conditions = conditions;
        },
        error: err => this.forecastError = err.statusText
      });
    });
  }

  navigateToMainPage() {
    this.router.navigate(['/']);
  }
}
