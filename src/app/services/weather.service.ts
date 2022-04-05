import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { Conditions } from '../models/conditions';
import { Conditions as ApiConditions } from './api/conditions';
import { ImagesService } from './images.service';
import { Forecast as ApiForcast } from './api/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url: string = 'https://api.openweathermap.org';

  private weather: string = '/data/2.5/weather';
  private forcast: string = '/data/2.5/forecast/daily';

  private appId: string = '5a4b2d457ecbef9eb2a71e480b947604';

  constructor(private httpClient: HttpClient) { }

  getGetWeatherByZipCode(zip: string): Observable<Conditions> {
    return this.httpClient.get<ApiConditions>(this.url + this.weather, {
      params: {
        'zip': `${zip}`,
        'appId': this.appId,
        'units': 'imperial'
      }
    }).pipe(
      tap(conditionApi => console.log('conditions', conditionApi)),
      map(conditionApi => {
        let condition = ({
          name: conditionApi.name,
          weather: conditionApi.weather[0].main,
          icon: ImagesService.getImageFromApiIcon(conditionApi.weather[0].icon),
          current: conditionApi.main.temp,
          max: conditionApi.main.temp_max,
          min: conditionApi.main.temp_min,
        }) as Conditions
        return condition;
      }),
      tap(conditions => console.log('conditions after map', conditions)),
    );
  }

  getFiveDayForcast(zip: string): Observable<Conditions[]> {
    return this.httpClient.get<ApiForcast>(this.url + this.forcast, {
      params: {
        'zip': zip,
        'appId': this.appId,
        'units': 'imperial',
        'cnt': 5
      }
    }).pipe(
      tap(apiForecast => console.log('forecast', apiForecast)),
      map(apiForecast => apiForecast.list.map(listItem => ({
        name: apiForecast.city.name,
        date: new Date(listItem.dt * 1000),
        icon: ImagesService.getImageFromApiIcon(listItem.weather[0].icon),
        weather: listItem.weather[0].main,
        current: listItem.temp.day,
        max: listItem.temp.max,
        min: listItem.temp.min,
      } as Conditions))),
      tap(forecast => console.log('forecast after map', forecast)),
    );
  }
}
