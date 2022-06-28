import { ValidatorResult } from '../models/validator-result';
import { Validator } from './validator';

export class EmailValidator extends Validator {
  validate(el: HTMLInputElement): ValidatorResult {
    // If it's empty it's valid
    if (el.value == null || el.value == '') {
      return new ValidatorResult(true);
    }

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(el.value)) {
      return new ValidatorResult(true);
    }
    
    return new ValidatorResult(false, 'Please eneter a valid email address');
  }
}
