import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'projects/auth/src/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.$isLoggedin.subscribe(s => this.isLoggedIn = s);
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logOut().subscribe((s) => {
      this.router.navigate(['home']);
    });
  }
}
