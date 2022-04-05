import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalstorageService } from '../../services/localstorage.service';
import { ValidatorsService } from '../../services/validators.service';


@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.css']
})
export class ZipCodeComponent implements OnInit {

  zipFormGroup: FormGroup;
  zipCodes: string[] = [];
  conditionsError: string;

  constructor(private fb: FormBuilder, private localStorageService: LocalstorageService) { }

  ngOnInit(): void {
    this.zipFormGroup = this.fb.group({
      location: ['', [Validators.required, ValidatorsService.isNumber]],
    });

    this.zipCodes = this.localStorageService.getZipCodes();
    console.log('local storage - zipcodes', this.zipCodes);
  }

  addZipCode() {
    this.conditionsError = '';
    if (this.zipFormGroup.get('location').errors) {
      console.log('form has errors', this.zipFormGroup.get('location').errors);
      return;
    }
    let zipCode = this.zipFormGroup.get('location').value;
    if (this.zipCodes.indexOf(zipCode) !== -1) {
      console.log('zipCode already exists', zipCode);
      return;
    }
    this.zipCodes.push(zipCode);
    this.conditionsError = null;
  }

  removeWeatherItem(zipCode: string) {
    const index = this.zipCodes.indexOf(zipCode);
    if (index > -1) {
      this.zipCodes.splice(index, 1);
    }
    console.log('model zipCodes', this.zipCodes);
    this.localStorageService.saveZipCodes(this.zipCodes);
  }

  zipCodeSuccess($event) {
    console.log('zip code success event');
    this.localStorageService.saveZipCodes(this.zipCodes);
    this.conditionsError = null;
  }

  zipCodeFailure($event) {
    console.log('zip code failure callback', $event);
    const index = this.zipCodes.indexOf($event);
    if (index > -1) {
      this.zipCodes.splice(index, 1);
    }
    console.log('zipCodes after failure', this.zipCodes);
    this.conditionsError = 'Could not retrieve weather condtions. Please check your zip code.';
  }
}
