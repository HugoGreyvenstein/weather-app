import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidatorsService {

  static isNumber(control: AbstractControl): ValidationErrors | null {
    console.log('is number validator');
    if (isNaN(parseInt(control.value))) {
      return {'isNumber': true};
    }
    return null;
  }
}
