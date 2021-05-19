import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MonAn } from './mon-an.model';

@Injectable({
  providedIn: 'root'
})
export class MonAnService {

  constructor(private http: HttpClient) { }

  getMonAnList(): Observable<MonAn[]> {
    return this.http.get<MonAn[]>(environment.apiURL + '/MonAns');
   }
   getMonAn(MonAn_ID: number): Observable<MonAn>  {
    return this.http.get<MonAn>(environment.apiURL + '/MonAns/' + MonAn_ID);
  }
   deleteMonAn(MonAn_ID: number) {
    return this.http.delete(environment.apiURL + '/MonAns/' + MonAn_ID).toPromise();
  }
  AddMonAn(monAn: MonAn) {
    return this.http.post(environment.apiURL + '/MonAns', monAn);
  }
 EditMonAn(MonAn_ID: number, monAn: MonAn): Observable<MonAn> {
return this.http.put<MonAn>(environment.apiURL + '/MonAns/' + MonAn_ID, monAn);

 }
}
