import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RequestInterceptor } from './interceptors/http.interceptor';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [],
  imports: [],
})
export class AuthModule {
  public static forRoot(environment: any): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        HttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: RequestInterceptor,
          multi: true,
        },
        AuthService,
        TokenService,
        {
          provide: 'environment',
          useValue: environment
        }
      ],
    };
  }
}
