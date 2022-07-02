import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';
import { RegisterOrganizationEdit } from '../models/edits/register-organization';
import { RegisterPersonalEdit } from '../models/edits/register-personal';
import { RegisterPersonalPost } from '../models/posts/register-personal';
import { RegisterApiService } from './register.service';

@Injectable()
export class RegisterDataService {
  private _personalEdit: RegisterPersonalEdit | null;
  private _organizationEdit: RegisterOrganizationEdit | null;

  constructor(
    private apiService: RegisterApiService,
    private toastService: ToastService
  ) {}

  getPersonalEdit() {
    if (this._personalEdit == null) {
      this._personalEdit = new RegisterPersonalEdit();
    }
    return this._personalEdit;
  }

  getOrganizationEdit() {
    if (this._organizationEdit == null) {
      this._organizationEdit = new RegisterOrganizationEdit();
    }
    return this._organizationEdit;
  }

  clear() {
    this._personalEdit = null;
    this._organizationEdit = null;
  }

  registerPersonalAccount() {
    return new Observable<any>((sub: Subscriber<any>) => {
      this.apiService
        .registerPersonalAccount(new RegisterPersonalPost(this._personalEdit!))
        .subscribe({
          next: (res) => {
            if (res) {
              this.toastService.show(
                'Register success',
                'We have sent out a validation email, please check in your email',
                ToastEventType.Success
              );
            } else {
              this.toastService.show(
                'Register failed',
                'Unexpected error',
                ToastEventType.Error
              );
            }
            sub.next(res);
          },
          error: (error) => {
            this.toastService.show(
              'Register failed',
              error.error,
              ToastEventType.Error
            );
            sub.error(error);
          },
        });
    });
  }

  registerOrganizationAccount() {}
}
