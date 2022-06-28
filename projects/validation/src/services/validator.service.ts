import { Injectable } from '@angular/core';
import { ValidationDirective } from '../directives/validation.directive';

@Injectable()
export class ValidatorService {
  validators: Array<ValidationDirective> = [];

  constructor() {}

  get isValid() {
    let result = true;
    this.validators.forEach((f) => {
      if (!f.validate()) {
        result = false;
      }
    });

    return result;
  }
}
