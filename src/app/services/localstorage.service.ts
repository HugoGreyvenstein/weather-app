import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  saveZipCodes(zipCodes: string[]) {
    localStorage.setItem('zipCodes', JSON.stringify(zipCodes));
  }

  getZipCodes(): string[] {
    let zipCodesJson = localStorage.getItem('zipCodes');
    console.log('local storage - zipcodes', zipCodesJson);
    let fromJson = JSON.parse(zipCodesJson);
    return fromJson ? fromJson : [];
  }
}
