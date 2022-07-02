import { ValidatorResult } from '../models/validator-result';
import { Validator } from './validator';

export class PasswordConfirmValidator extends Validator {
  private _comparedEl: HTMLInputElement;

  setCompareEl(comparedEl: HTMLInputElement) {
    this._comparedEl = comparedEl;
  }

  validate(thisEl: HTMLInputElement): ValidatorResult {
    // If it's empty it's valid
    if (thisEl.value == this._comparedEl.value) {
      return new ValidatorResult(true);
    }
    return new ValidatorResult(false, 'Password unmatched');
  }
}
