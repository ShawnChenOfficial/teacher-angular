import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { LOGIN_ROUTE } from '../../../../projects/auth/src/persistence/login-route';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  $isLoggedin: BehaviorSubject<boolean>;

  constructor(private tokenService: TokenService, private router: Router) {
    this.$isLoggedin = new BehaviorSubject(this.tokenService.hasToken());
  }

  login(username: string, password: string) {
    return new Observable((loginSub: Subscriber<any>) => {
      this.tokenService.getAccessToken(username, password).subscribe(
        sub => {
          loginSub.complete();
        },
        (er: HttpErrorResponse) => {
          console.log(er.status);
          if (er.status == 400) {
            loginSub.error('Invalid email or password');
          } else {
            loginSub.error('Unknown error');
          }
        }
      );
    });
  }

  logOut() {
    this.$isLoggedin.next(false);
    this.tokenService.deleteToken();
    localStorage.clear();
    this.router.navigate([LOGIN_ROUTE]);
  }
}
