import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
// import { tap } from 'rxjs/Operator';


@Injectable({
  providedIn: 'root'
})
export class AppInterceptor {
  headers: HttpHeaders;
  constructor( private cookieService: CookieService, private router: Router) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: String = this.cookieService.get('token');
    this.headers = new HttpHeaders({
                  'Authorization': '' + token
                          });
    request = request.clone({
        headers: this.headers
    });
    return next.handle(request).pipe(
    //   tap(
    //   (event: HttpEvent<any>) => {},
    //   (error: HttpErrorResponse) => {
    //     if (this.router.url !== '/login' && (error.status === 401)) {
    //       this.router.navigate(['/login']);
    //     }

    //   }
    // )
    );
  }

  }
