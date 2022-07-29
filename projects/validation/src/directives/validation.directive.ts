import {
  Directive,
  DoCheck,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ValidatorResult } from '../models/validator-result';
import { Validator } from '../validators/validator';
import { ValidatorService } from '../services/validator.service';
import ValidatorHelper from '../models/validator-option';
import { ValidatorType } from '../models/validator-type';

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

  @Input('form-validation')
  set options(input: any) {
    if (this.element.tagName != 'input' && this.element.tagName != 'textarea') {
      this.validators = [];
      this.validatorService.validators.push(this);
    }

    if (input == null)
      return;

    if (typeof (input) === 'string') {
      input.split(' ').forEach(v => {
        const validator = ValidatorHelper.getValidator(v as ValidatorType, {});
        this.validators.push(validator);
      });
    }
    else {
      for (let validatorType in input) {
        const validator = ValidatorHelper.getValidator(validatorType as ValidatorType, input[validatorType]);
        this.validators.push(validator);
      }
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
    this.validators.filter((f) => {
      let validateReuslt = f.validate(this.element);
      if (!validateReuslt.isValid) {
        result = validateReuslt;
      }
    });

    if (result != null && !result.isValid) {
      this.label.style.height = '';
      this.label.style.opacity = '';
      this.label.innerHTML = result.message ?? '';
      this.el.nativeElement.parentNode.style.borderRight = 'red solid';
      this.el.nativeElement.parentNode.style.paddingRight = '20px';
      this.el.nativeElement.parentNode.style.marginRight = '-20px';
      return false;
    } else {
      this.label.style.height = '0px';
      this.label.style.opacity = '0';
      this.label.innerHTML = '';
      this.el.nativeElement.parentNode.style.borderRight = '';
      this.el.nativeElement.parentNode.style.paddingRight = '';
      this.el.nativeElement.parentNode.style.marginRight = '';
      return true;
    }
  }
}
