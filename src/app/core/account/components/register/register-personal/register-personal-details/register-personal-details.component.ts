import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  genderOptions = Object.keys(UserGender)
    .map((key) => UserGender[key as any])
    .filter((value) => typeof value === 'string') as string[];
  phonePrefixOptions: Array<any> = new Array<any>(
    '020',
    '021',
    '022',
    '026',
    '027',
    '028',
    '029'
  );

  constructor(
    private registerDataService: RegisterDataService,
    private validatorService: ValidatorService,
    private router: Router
  ) {
    this.edit = this.registerDataService.getPersonalEdit();
  }

  ngOnInit(): void {
    this.edit.gender = UserGender.Female;
    this.edit.phonePrefix = this.phonePrefixOptions[0];
  }

  submit() {
    if (!this.validatorService.isValid) {
      return;
    } else {
      this.registerDataService.registerPersonalAccount().subscribe({
        next: (res) => {
          this.router.navigate(['account', 'login']);
        },
        error: (error) => {},
      });
    }
  }
}
