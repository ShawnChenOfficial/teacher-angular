import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPersonalEdit } from '../../../models/edits/register-personal';
import { RegisterDataService } from '../../../services/register-data.service';

@Component({
  selector: 'app-register-personal',
  templateUrl: './register-personal.component.html',
  styleUrls: ['./register-personal.component.scss']
})
export class RegisterPersonalComponent implements OnInit {

  edit: RegisterPersonalEdit = new RegisterPersonalEdit();

  constructor(private router: Router, private registerDataService: RegisterDataService) { }

  ngOnInit(): void {
    this.registerDataService.clear();
    this.edit = this.registerDataService.getPersonalEdit();
  }

  get showDetails() {
    return this.router.url.toLocaleLowerCase().indexOf('details') != -1;
  }

}
