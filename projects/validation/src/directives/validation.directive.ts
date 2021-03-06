import {
  Directive,
  DoCheck,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import ValidatorHelper, { ValidatorOption } from '../models/validator-option';
import { ValidatorResult } from '../models/validator-result';
import { Validator } from '../validators/validator';
import { ValidatorService } from '../services/validator.service';
import { PasswordConfirmValidator } from '../validators/validator-password-confirm';

@Directive({
  selector: '[form-validation]',
  exportAs: 'form-validation',
})
export class ValidationDirective implements OnInit, DoCheck {
  element: HTMLInputElement;
  label: HTMLSpanElement;
  validators: Array<Validator>;
  startTyping = false;

  constructor(
    private el: ElementRef,
    private validatorService: ValidatorService
  ) {
    this.element = this.el.nativeElement;
  }


  @Input('password-confirm')
  set passwordConfirm(elementConfirmWith: HTMLInputElement) {
    const validator = new PasswordConfirmValidator();
    validator.setCompareEl(elementConfirmWith);
    this.validators.push(validator)
  }

  @Input('form-validation')
  set options(input: string | null) {
    if (this.element.tagName != 'input' && this.element.tagName != 'textarea') {
      this.validators = [];
      this.validatorService.validators.push(this);
    }

    if (input != null) {
      input.split(' ').forEach((f) => {
        this.validators.push(ValidatorHelper.getValidator(f as ValidatorOption));
      });
    }
  }

  @HostListener('input')
  onInput() {
    this.startTyping = true;
    this.validate();
  }

  ngDoCheck(): void {
    if (this.startTyping) {
      this.validate();
    }
  }

  ngOnInit() {
    this.initErrorLabel();
  }

  initErrorLabel() {
    const label = document.createElement('div');
    label.classList.add('invalid-feedback');
    label.classList.add('d-block');
    label.classList.add('m-0');

    (this.element.parentNode as HTMLElement).appendChild(label);

    this.label = label;
  }

  validate() {
    let result: ValidatorResult | undefined;

    // validate all validator for one input
    this.validators.forEach((f) => {
      let validateReuslt = f.validate(this.element);
      if (!validateReuslt.isValid) {
        result = validateReuslt;
      }
    });

    if (result != null && !result.isValid) {
      this.label.style.height = '';
      this.label.style.opacity = '';
      this.label.innerHTML = result.message ?? '';
      this.el.nativeElement.style.backgroundColor = '#fffe51';
      return false;
    } else {
      this.label.style.height = '0px';
      this.label.style.opacity = '0';
      this.el.nativeElement.style.backgroundColor = '';
      return true;
    }
  }
}
