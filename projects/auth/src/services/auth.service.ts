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
        (sub) => {
          this.$isLoggedin.next(true);
          loginSub.next(sub);
        },
        (er: HttpErrorResponse) => {
          if (er.status == 400) {
            loginSub.error(er.error.error_description);
          } else {
            loginSub.error('Unknown error');
          }
        }
      );
    });
  }

  logOut() {
    return new Observable<any>((sub: Subscriber<any>) => {
      this.$isLoggedin.next(false);
      this.tokenService.deleteToken();
      localStorage.clear();
      sub.next();
    });
  }
}
