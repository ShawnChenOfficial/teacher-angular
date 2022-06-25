import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { LOGIN_ROUTE } from '../persistence/login-route';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any> | any,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    return new Observable((sub: Subscriber<HttpEvent<any>>) => {
      const successHandler = (success: any) => {
        sub.next(success);
      };

      const errorHandler = (error: any) => {
        sub.error(error);
      };

      const completeHandler = () => {
        sub.complete();
      };

      if(req.auth || req.withCredentials){
        if(!this.tokenService.hasToken()){
          this.router.navigate([LOGIN_ROUTE]);
          return;
        }
        else{
          this.tokenService.getToken().subscribe(sub =>{
            req = req.clone({
              setHeaders: {
                Authorization: 'Bearer ' + sub.accessToken
              }
            });
            // Pass the request along
            handler.handle(req).subscribe(successHandler, errorHandler, completeHandler);
          },
          error => {
            if(error.status == 400){
              this.authService.logOut();
            }
            else{
              errorHandler(error);
            }
          });
        }
      }
      else{
        req = req.clone({
          setHeaders:{}
        });
        handler.handle(req).subscribe(successHandler, errorHandler, completeHandler);
      }
    });
  }
}
