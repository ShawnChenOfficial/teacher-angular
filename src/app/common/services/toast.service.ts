import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastEvent, ToastEventType } from '../models/toast';

@Injectable()
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  show(title: string, message: string | string[], type: ToastEventType) {
    this._toastEvents.next({
      message: message,
      title: title,
      type: type,
    });
  }
}
