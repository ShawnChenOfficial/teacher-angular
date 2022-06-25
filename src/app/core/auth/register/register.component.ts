import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get shownPurposePage() {
    return this.router.url.toLocaleLowerCase().indexOf('personal') != -1 
        || this.router.url.toLocaleLowerCase().indexOf('organization') != -1 ;
  }

}
