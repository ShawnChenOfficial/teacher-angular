import { ValidatorResult } from '../models/validator-result';
import { Validator } from './validator';

export class NumberValidator extends Validator {
  validate(el: HTMLInputElement): ValidatorResult {
    if (el.value == null || el.value == '') {
      return new ValidatorResult(true);
    }
    if (isNaN(el.value as any)) {
      return new ValidatorResult(false, 'Please enter a valid number');
    }
    return new ValidatorResult(true);
  }
}
