import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { BanAn } from './ban-an.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BanAnService {


  constructor(private http: HttpClient) { }

  getBanAnList(): Observable<BanAn[]> {
    return this.http.get<BanAn[]>(environment.apiURL + '/BanAns');
   }
   getBanAn(Ban_ID: number): Observable<BanAn>  {
    return this.http.get<BanAn>(environment.apiURL + '/BanAns/' + Ban_ID);
  }
   deleteBanAn(Ban_ID: number) {
    return this.http.delete(environment.apiURL + '/BanAns/' + Ban_ID).toPromise();
  }
  AddBanAn(banAn: BanAn) {
    return this.http.post(environment.apiURL + '/BanAns', banAn);
  }
 EditBanAn(Ban_ID: number, banAn: BanAn): Observable<BanAn> {
return this.http.put<BanAn>(environment.apiURL + '/BanAns/' + Ban_ID, banAn);

 }


}
