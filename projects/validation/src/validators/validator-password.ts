import { ValidatorResult } from '../models/validator-result';
import { Validator } from './validator';

export class PasswordValidator extends Validator {

  constructor(private minLenght: number) {
    super();
  }

  validate(el: HTMLInputElement): ValidatorResult {
    // If it's null it's okay
    if (el.value == null || el.value == '') {
      return new ValidatorResult(true);
    }

    if (el.value.length < this.minLenght) {
      return new ValidatorResult(
        false,
        `Password must be at least 8 characters`
      );
    }

    if (!/[A-Z]*[a-z]|[a-z]*[A-Z]/.test(el.value)) {
      return new ValidatorResult(
        false,
        `Password must have a mix of uppercase and lowercase letters`
      );
    }

    if (!/[0-9]/.test(el.value)) {
      return new ValidatorResult(
        false,
        `Password must contain at least one number`
      );
    }

    if (!/[~`!@()#$%\^&*+=\-\[\]\\';,/{}|\\':<>\?]/.test(el.value)) {
      return new ValidatorResult(
        false,
        `Password must contain at least one special character`
      );
    }

    return new ValidatorResult(true);
  }
}
