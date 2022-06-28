import { Injectable } from '@angular/core';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';
import { RegisterPersonalEdit } from '../models/edits/register-personal';
import { RegisterPersonalPost } from '../models/posts/register-personal';
import { RegisterApiService } from './register.service';

@Injectable()
export class RegisterDataService {
  private _personalEdit: RegisterPersonalEdit | null;
  private _organizationEdit: null;

  constructor(private apiService: RegisterApiService, private toastService: ToastService) {}

  getPersonalEdit() {
    if (this._personalEdit == null) {
      this._personalEdit = new RegisterPersonalEdit();
    }
    return this._personalEdit;
  }

  getOrganizationEdit() {
    return this._organizationEdit;
  }

  clear() {
    this._personalEdit = null;
    this._organizationEdit = null;
  }

  registerPersonalAccount() {
    this.apiService.registerPersonalAccount(new RegisterPersonalPost(this._personalEdit!))
    .subscribe(res => {
      this.toastService.show('Register success', 'We have sent out a validation email, please check in your email', ToastEventType.Success);
    }, error =>{
      console.log(error);
        this.toastService.show('Register failed', error, ToastEventType.Error);
    })
  }

  registerOrganizationAccount() {}
}
