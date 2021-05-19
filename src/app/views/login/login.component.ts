import { Component } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  message: String = '';
  userName: String = '';
  password: String = '';
  constructor(private loginService: LoginService,
              private router: Router,
              private cookieService: CookieService) {}
  login() {
    this.loginService.login(this.userName, this.password).subscribe(
      data => {
        if (data.errorCode === 0) {
          this.cookieService.set('userId', data.data.userId.toString());
          this.cookieService.set('fullName', data.data.fullName.toString());
          this.cookieService.set('token', data.data.accessToken.toString());
          this.router.navigate(['/dashboard']);
        } else {
          this.message = data.errorMassage;
        }
    });
  }
}
