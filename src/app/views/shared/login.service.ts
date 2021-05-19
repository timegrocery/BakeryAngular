import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface LoginResult {
  errorCode: Number;
  errorMassage: String;
  data: {
    userId: Number;
    account: String;
    fullName: String;
    accessToken: String;
  };

}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService, private http: HttpClient) { }
  login(userName: String, password: String): Observable<LoginResult> {
    const param = {
      username: userName,
      password: password
    };
    return this.http.post<LoginResult>(this.api.url.login, param);
  }
}
