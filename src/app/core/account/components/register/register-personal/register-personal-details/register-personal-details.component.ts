import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_ROUTE } from 'projects/auth/src/persistence/login-route';
import { ValidatorService } from 'projects/validation/src/services/validator.service';
import { RegisterPersonalEdit } from 'src/app/core/account/models/edits/register-personal';
import { UserGender } from 'src/app/core/account/models/views/user-gender';
import { RegisterDataService } from 'src/app/core/account/services/register-data.service';

@Component({
  selector: 'app-register-personal-details',
  templateUrl: './register-personal-details.component.html',
  styleUrls: ['./register-personal-details.component.scss'],
})
export class RegisterPersonalDetailsComponent implements OnInit {
  edit: RegisterPersonalEdit;

  test = '020';

  isLoading = false;

  genderOptions = Object.keys(UserGender)
    .filter((value) => typeof value === 'string') as string[];

  constructor(
    private registerDataService: RegisterDataService,
    private validatorService: ValidatorService,
    private router: Router
  ) {
    this.edit = this.registerDataService.getPersonalEdit();

    if (!this.edit.hasAccountInfo) {
      this.router.navigate(['account', 'register']);
    }
  }

  ngOnInit(): void {
    this.edit.gender = UserGender.Female;
  }

  submit() {
    if (!this.validatorService.isValid) {
      return;
    } else {
      this.isLoading = true;
      this.registerDataService.registerPersonalAccount().subscribe({
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
