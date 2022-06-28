import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { ToastEvent, ToastEventType } from '../../models/toast';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  
  @Output() disposeEvent = new EventEmitter();

  @ViewChild('toastElement', { static: true })
  toastEl!: ElementRef;

  @Input()
  toastEvent!: ToastEvent;

  toastEventType = ToastEventType;

  toast!: Toast;

  ngOnInit() {
    this.show();
  }

  get isSuccess(){
    return this.toastEvent.type == this.toastEventType.Success;
  }

  show() {
    this.toast = new Toast(
      this.toastEl.nativeElement,
      {
        delay: 3000
      }
    );
    fromEvent(this.toastEl.nativeElement, 'hidden.bs.toast')
      .pipe(take(1))
      .subscribe(() => this.hide());

    this.toast.show();
  }

  hide() {
    this.toast.dispose();
    this.disposeEvent.emit();
  }
}

