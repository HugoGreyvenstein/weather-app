import { Injectable } from '@angular/core';

export class ImagesService {
  private static iconUrl = "https://www.angulartraining.com/images/weather/";
  private static SUN = 'sun.png';
  private static CLOUDS = 'clouds.png';
  private static RAIN = 'rain.png';
  private static SNOW = 'snow.png';

  private static sunDescriptions = ['01d', '01n', '50d', '50n'];
  private static cloudsDescriptions = ['02d', '02n', '03d', '03n', '04d', '04n',];
  private static rainDescriptions = ['09d', '09n', '10d', '10n', '11d', '11n'];
  private static snowDescriptions = ['13d', '13n'];

  constructor() { }

  static getImageFromApiIcon(description: string) {
    if (this.sunDescriptions.indexOf(description) !== -1) {
      return this.iconUrl + this.SUN;
    }
    if (this.cloudsDescriptions.indexOf(description) !== -1) {
      return this.iconUrl + this.CLOUDS;
    }
    if (this.rainDescriptions.indexOf(description) !== -1) {
      return this.iconUrl + this.RAIN;
    }
    if (this.snowDescriptions.indexOf(description) !== -1) {
      return this.iconUrl + this.SNOW;
    }
    return this.iconUrl + this.SUN;
  }
}
