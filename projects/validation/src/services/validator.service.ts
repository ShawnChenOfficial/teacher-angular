import { Injectable } from '@angular/core';
import { ValidationDirective } from '../directives/validation.directive';

@Injectable()
export class ValidatorService {
  validators: Array<ValidationDirective> = [];

  constructor() { }

  get isValid() {
    return this.validators.filter(f => !f.validate()).length == 0;
  }
}
