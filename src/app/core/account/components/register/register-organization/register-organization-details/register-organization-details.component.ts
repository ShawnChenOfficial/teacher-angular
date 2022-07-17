import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_ROUTE } from 'projects/auth/src/persistence/login-route';
import { ValidatorService } from 'projects/validation/src/services/validator.service';
import { RegisterOrganizationEdit } from 'src/app/core/account/models/edits/register-organization';
import { RegisterDataService } from 'src/app/core/account/services/register-data.service';

@Component({
  selector: 'app-register-organization-details',
  templateUrl: './register-organization-details.component.html',
  styleUrls: ['./register-organization-details.component.scss']
})
export class RegisterOrganizationDetailsComponent implements OnInit {

  edit: RegisterOrganizationEdit = new RegisterOrganizationEdit();

  isLoading = false;

  constructor(
    private router: Router,
    private registerDataService: RegisterDataService,
    private validatorService: ValidatorService
  ) {
    this.edit = this.registerDataService.getOrganizationEdit();
  }

  ngOnInit(): void {
  }

  submit() {
    if (!this.validatorService.isValid || !this.edit.hasOrganizationInfo) {
      return;
    } else {
      this.isLoading = true;
      this.registerDataService.registerOrganizationAccount().subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res) this.router.navigate([LOGIN_ROUTE]);
        },
        error: (error) => {
          this.isLoading = false;
        },
      });
    }
  }
}
