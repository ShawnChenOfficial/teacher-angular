import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { AuthRole } from '../models/auth.role';
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

  hasPermission(role: AuthRole | 'normal') {
    if (!this.tokenService.hasToken()) {
      return false;
    }

    var roles = this.tokenService.getRoles()

    switch (role) {
      case 'normal':
        return true;
      case AuthRole.Admin:
        return roles?.indexOf(AuthRole.Admin) != -1;
      case AuthRole.OrganizationAdmin:
        return roles?.indexOf(AuthRole.OrganizationAdmin) != -1;
      case AuthRole.OrganizationUser:
        return roles?.indexOf(AuthRole.OrganizationUser) != -1;
      case AuthRole.User:
        return roles?.indexOf(AuthRole.User) != -1;
      default:
        return false;
    }
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
