import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ValidatorService } from 'projects/validation/src/services/validator.service';
import { SearchResultComponent } from 'src/app/common/components/search/search.component';
import { SearchEvent } from 'src/app/common/models/search-result';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';
import { RegisterOrganizationEdit } from '../../../models/edits/register-organization';
import { OrganizationApiService } from '../../../services/organization.service';
import { RegisterDataService } from '../../../services/register-data.service';

@Component({
  selector: 'app-register-organization',
  templateUrl: './register-organization.component.html',
  styleUrls: ['./register-organization.component.scss'],
})
export class RegisterOrganizationComponent implements OnInit {

  edit: RegisterOrganizationEdit = new RegisterOrganizationEdit();

  @ViewChild(SearchResultComponent)
  child: SearchResultComponent;

  constructor(
    private router: Router,
    private organizationService: OrganizationApiService,
    private registerDataService: RegisterDataService,
    private validatorService: ValidatorService,
    private toastService: ToastService
  ) {
    this.registerDataService.clear();
    this.edit = this.registerDataService.getOrganizationEdit();
  }

  ngOnInit(): void {
  }

  search($event: SearchEvent) {
    this.organizationService.externalSearch($event.data ?? '').subscribe(res => {
      $event.func(res);
    }, error => {
      this.toastService.show('Failed', error.error, ToastEventType.Error);
    });
  }

  setOrganization($event: SearchEvent) {
    this.edit.organization = $event.data;
    $event.func($event.data.organizationName)
  }

  clearOrganization() {
    this.edit.organization = undefined;
  }

  submit() {
    if (!this.validatorService.isValid || !this.edit.hasOrganizationInfo) {
      return;
    }
    else {
      this.router.navigate(['account', 'register', 'organization', 'details']);
    }
  }

  get showDetails() {
    return this.router.url.toLocaleLowerCase().indexOf('details') != -1;
  }
}
