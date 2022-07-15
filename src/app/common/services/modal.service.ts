import { ApplicationRef, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _rootViewContainerRef: ViewContainerRef;
  private _currentModal: ComponentRef<ModalComponent> | null;

  private _subscriber: Subscriber<any>;

  constructor(private appRef: ApplicationRef) {
    this._rootViewContainerRef = (appRef.components[0].instance as AppComponent).rootViewContainerRef;
  }

  open<T, D = any>(componentType: Type<T>, data?: D, size: 'sm' | 'md' | 'lg' | 'xl' = 'sm') {
    return new Observable<any>(sub => {
      this._subscriber = sub;

      if (this._currentModal == null) {
        this._currentModal = this._rootViewContainerRef.createComponent(ModalComponent);
        this._currentModal.instance.component = componentType;
        this._currentModal.instance.size = size;
        this._currentModal.instance.data = data;
      }
      else {
        //call next immediately
        this.complete();
      }
    })
  }

  /**
   * complete modal
   * if return something means saved,
   * otherwise means unsaved
   */
  complete(response?: any) {
    if (this._currentModal != null) {
      this._currentModal?.destroy();
      this._currentModal = null;
    }
    this._subscriber.next(response);
  }

}

