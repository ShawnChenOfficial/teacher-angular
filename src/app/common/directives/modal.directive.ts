import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modal-content]'
})
export class ModalDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
