import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { HttpInterceptorHandler } from '../interceptors/http.interceptor.handler';

@Injectable()
export class HttpService extends HttpClient {
  constructor(private httpHandler: HttpHandler) {
    super(httpHandler);
  }

  authHeader() {
    return this.addInterceptor({
      intercept(req: HttpRequest<any> | any, next) {
        req.auth = true;
        return next.handle(req);
      },
    });
  }

  noAuthHeader() {
    return this.addInterceptor({
      intercept(req: HttpRequest<any> | any, next) {
        req.noHeaders = true;
        return next.handle(req);
      },
    });
  }

  private addInterceptor(interceptor: HttpInterceptor) {
    const handler = new HttpInterceptorHandler(this.httpHandler, interceptor);
  }
}
