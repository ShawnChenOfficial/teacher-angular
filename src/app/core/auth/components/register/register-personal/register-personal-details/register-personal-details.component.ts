import { Component, OnInit } from '@angular/core';
import { RegisterPersonalEdit } from 'src/app/core/auth/models/edits/register-personal';
import { UserGender } from 'src/app/core/auth/models/views/user-gender';
import { RegisterDataService } from 'src/app/core/auth/services/register-data.service';

@Component({
  selector: 'app-register-personal-details',
  templateUrl: './register-personal-details.component.html',
  styleUrls: ['./register-personal-details.component.scss'],
})
export class RegisterPersonalDetailsComponent implements OnInit {
  edit: RegisterPersonalEdit;

  genderOptions = Object.keys(UserGender);

  constructor(private registerDataService: RegisterDataService) {}

  ngOnInit(): void {
    this.edit = this.registerDataService.getPersonalEdit();
  }

  submit() {
    this.registerDataService.registerPersonalAccount();
  }
}
