import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { LOGIN_ROUTE } from '../persistence/login-route';
import { TokenService } from './token.service';

export class AuthService {
  $isLoggedin: BehaviorSubject<boolean> = new BehaviorSubject(
    this.tokenService.hasToken()
  );

  constructor(private tokenService: TokenService, private router: Router) {}

  login(username: string, password: string) {
    return new Observable((loginSub: Subscriber<any>) => {
      this.tokenService.getAccessToken(username, password).subscribe(
        sub => {
          loginSub.complete();
        },
        (er: HttpErrorResponse) => {
          if (er.status == 400) {
            er.error('Login failed, Invalid email or password');
          } else {
            er.error('Login failed, Unknown error');
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
