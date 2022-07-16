import { Component, Injector, Input, OnInit, SimpleChange, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalDirective } from '../../directives/modal.directive';
import { INJECT_DATA } from '../../persistance/persistance';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  component: any;

  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  data: any;

  @ViewChild(ModalDirective, { static: true }) modalDirective: ModalDirective;

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.modalDirective.viewContainerRef;

    viewContainerRef.clear();

    const injector = Injector.create([{
      provide: INJECT_DATA, useValue: this.data
    }])

    const ref = viewContainerRef.createComponent(this.component, { injector: injector });
  }

}
