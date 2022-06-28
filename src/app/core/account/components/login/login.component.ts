import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'projects/auth/src/services/auth.service';
import { ValidationDirective } from 'projects/validation/src/directives/validation.directive';
import { ValidatorService } from 'projects/validation/src/services/validator.service';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private validatorService: ValidatorService
  ) {}

  ngOnInit(): void {}

  tryLogin() {
    if (!this.validatorService.isValid) {
      return;
    } else {
      this.authService.login(this.username, this.password).subscribe(
        (response) => {
          this.toastService.show('Welcome', '', ToastEventType.Success);
          this.router.navigate(['']);
        },
        (error) => {
          this.toastService.show('Login Failed', error, ToastEventType.Error);
        }
      );
    }
  }
}
