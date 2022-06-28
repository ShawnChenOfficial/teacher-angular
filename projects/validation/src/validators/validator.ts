import { ValidatorResult } from '../models/validator-result';

export abstract class Validator {
  abstract validate(el: HTMLInputElement): ValidatorResult;
}
