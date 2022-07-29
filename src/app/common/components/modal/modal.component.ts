import { Component, Injector, Input, OnInit, Renderer2, SimpleChange, ViewChild, ViewContainerRef } from '@angular/core';
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

  constructor(public viewContainerRef: ViewContainerRef, private render: Renderer2) { }

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

    this.render.setStyle(ref.location.nativeElement, 'display', 'flex');
    this.render.setStyle(ref.location.nativeElement, 'flex-direction', 'column');
    this.render.setStyle(ref.location.nativeElement, 'overflow-y', 'auto');
  }
}
