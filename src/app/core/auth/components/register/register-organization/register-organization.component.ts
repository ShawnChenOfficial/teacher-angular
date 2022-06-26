import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-organization',
  templateUrl: './register-organization.component.html',
  styleUrls: ['./register-organization.component.scss'],
})
export class RegisterOrganizationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  get showDetails() {
    return this.router.url.toLocaleLowerCase().indexOf('details') != -1;
  }
}
