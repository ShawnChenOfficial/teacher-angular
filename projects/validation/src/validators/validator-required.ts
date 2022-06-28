import { ValidatorResult } from '../models/validator-result';
import { Validator } from './validator';

export class RequiredValidator extends Validator {
  validate(el: HTMLInputElement): ValidatorResult {
    // If it's null it's okay
    if (el.value == null || el.value == '') {
      return new ValidatorResult(false, `This field is required`);
    }
    return new ValidatorResult(true);
  }
}
