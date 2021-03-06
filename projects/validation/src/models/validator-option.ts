import { EmailValidator } from '../validators/validator-email';
import { NumberValidator } from '../validators/validator-number';
import { PasswordValidator } from '../validators/validator-password';
import { RequiredValidator } from '../validators/validator-required';

export type ValidatorOption = 'required' | 'email' | 'number' | 'password';

export default class ValidatorHelper {
  static getValidator(option: ValidatorOption) {
    switch (option) {
      case 'required':
        return new RequiredValidator();
      case 'email':
        return new EmailValidator();
      case 'number':
        return new NumberValidator();
      case 'password':
        return new PasswordValidator(8);
      default:
        throw new Error('unknown validator type');
    }
  }
}
