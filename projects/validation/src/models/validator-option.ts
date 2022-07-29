import { COMPARED_WITH, CompareValidator } from '../validators/validator-compare';
import { EmailValidator } from '../validators/validator-email';
import { NumberValidator } from '../validators/validator-number';
import { PasswordValidator } from '../validators/validator-password';
import { RequiredValidator } from '../validators/validator-required';
import { ValidatorType } from './validator-type';

export default class ValidatorHelper {
  static getValidator(validator: ValidatorType, options: any) {
    switch (validator) {
      case 'required':
        return new RequiredValidator();
      case 'email':
        return new EmailValidator();
      case 'number':
        return new NumberValidator();
      case 'password':
        return new PasswordValidator(8);
      case 'comparedWith':
        return new CompareValidator(options[COMPARED_WITH]);
      default:
        throw new Error('unknown validator type');
    }
  }
}