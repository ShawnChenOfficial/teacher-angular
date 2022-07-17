import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { observable, Observable, Subject, Subscriber } from 'rxjs';
import {
  TOKEN_ACCESS,
  TOKEN_EXPIRES,
  TOKEN_NAME,
  TOKEN_ORGANIZATIONID,
  TOKEN_REFRESH,
  TOKEN_ROLES,
  TOKEN_USERID,
} from 'projects/auth/src/persistence/tokens';
import { AuthRole } from '../models/auth.role';
import { AuthToken } from '../models/auth.token';

@Injectable()
export class TokenService {
  constructor(private http: HttpClient, @Inject('environment') private environment: any) { }

  getAccessToken(username: string, password: string) {
    let params = new HttpParams();
    params = params.set('username', username);
    params = params.set('password', password);
    params = params.set('grant_type', 'password');
    params = params.set('scopes', 'role');

    return new Observable((sub: Subscriber<any>) => {
      this.http
        .post(this.environment.baseEndPoint + '/api/account/token', params)
        .subscribe((token) => {
          this.saveToken(token);
          sub.next();
        }, error => {
          sub.error(error);
        });
    });
  }

  getToken(): Observable<AuthToken> {
    return new Observable((sub: Subscriber<AuthToken>) => {
      if (!this.hasToken()) {
        sub.error('plase login');
      }
      if (this.tokenExpired()) {
        this.refreshToken().subscribe({
          next: token => {
            sub.next(token);
          },
          error: error => {
            sub.error(error);
          }
        }
        );
      } else {
        sub.next(this.getStorageToken());
      }
    });
  }

  getRoles() {
    if (!this.hasToken()) {
      return '';
    }
    return localStorage.getItem(TOKEN_ROLES);
  }

  deleteToken() {
    localStorage.removeItem(TOKEN_ACCESS);
    localStorage.removeItem(TOKEN_REFRESH);
    localStorage.removeItem(TOKEN_USERID);
    localStorage.removeItem(TOKEN_ROLES);
    localStorage.removeItem(TOKEN_EXPIRES);
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(TOKEN_ORGANIZATIONID);
  }

  hasToken(): boolean {
    // make sure all the tokens properties exist
    return (
      localStorage.getItem(TOKEN_ACCESS) != null &&
      localStorage.getItem(TOKEN_REFRESH) != null &&
      localStorage.getItem(TOKEN_ROLES) != null &&
      localStorage.getItem(TOKEN_USERID) != null &&
      localStorage.getItem(TOKEN_EXPIRES) != null &&
      localStorage.getItem(TOKEN_NAME) != null
    );
  }

  // refresh access token base on current refresh token and save to local storage
  private refreshToken(): Observable<AuthToken> {
    var refresh_token = this.getRefreshToken();

    let params = new HttpParams();
    params = params.set('grant_type', 'refresh_token');
    params = params.set('refresh_token', refresh_token!);

    return new Observable((sub: Subscriber<any>) => {
      this.http
        .post(this.environment.baseEndPoint + '/api/account/token', params)
        .subscribe((token) => {
          this.saveToken(token);
          sub.next(this.getRefreshToken());
        }, error => {
          sub.error(error);
        });
    });
  }

  private saveToken(json: any) {
    localStorage.setItem(TOKEN_ACCESS, json.access_token);
    localStorage.setItem(TOKEN_REFRESH, json.refresh_token);
    localStorage.setItem(TOKEN_USERID, json.userId);
    localStorage.setItem(TOKEN_NAME, json.name);
    localStorage.setItem(TOKEN_ROLES, json.roles);
    localStorage.setItem(TOKEN_ORGANIZATIONID, json.organizationId);

    // expiry is now + token lifetime * 1000 millionseconds
    const expiry: Date = new Date();
    expiry.setTime(expiry.getTime() + json.expires_in * 1000);
    localStorage.setItem(TOKEN_EXPIRES, expiry.toString());
  }

  private tokenExpired(): boolean {
    return new Date().getTime() > this.getStorageToken()!.expires!.getTime();
  }

  private getStorageToken(): AuthToken | undefined {
    if (!this.hasToken()) return undefined;
    const token = new AuthToken();
    token.accessToken = localStorage.getItem(TOKEN_ACCESS);
    token.refreshToken = localStorage.getItem(TOKEN_REFRESH);
    token.userId = localStorage.getItem(TOKEN_USERID);
    token.name = localStorage.getItem(TOKEN_NAME);
    token.organizationId = localStorage.getItem(TOKEN_ORGANIZATIONID);
    token.roles = localStorage
      .getItem(TOKEN_ROLES)!
      .split(',')
      .map((m) => m as AuthRole);
    token.expires = new Date(localStorage.getItem(TOKEN_EXPIRES)!);
    return token;
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem(TOKEN_REFRESH);
  }
}
