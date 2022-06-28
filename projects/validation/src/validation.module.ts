import { NgModule } from '@angular/core';
import { ValidationDirective } from './directives/validation.directive';
import { ValidatorService } from './services/validator.service';



@NgModule({
  declarations: [
    ValidationDirective
  ],
  imports: [
  ],
  exports: [
    ValidationDirective
  ],
  providers:[
    ValidatorService
  ]
})
export class ValidationModule { }
