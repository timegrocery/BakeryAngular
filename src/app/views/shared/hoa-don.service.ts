import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HoaDon } from './hoa-don.model';
import { OrderResponses } from './order-responses';

@Injectable({
  providedIn: 'root'
})
export class HoaDonService {

  constructor(private http: HttpClient) { }

  getHoaDonList(): Observable<HoaDon[]> {
    return this.http.get<HoaDon[]>(environment.apiURL + '/HoaDons');
   }
   getHoaDon(HoaDon_ID: number): Observable<HoaDon> {
     return this.http.get<HoaDon>(environment.apiURL + '/HoaDons/' + HoaDon_ID);

   }
   getOrder(Ban_ID: number): Observable<OrderResponses>  {
     return this.http.get<OrderResponses>(environment.apiURL + '/HOADON/' + Ban_ID);

   }
   deleteHoaDon(hoaDon_ID: number) {
    return this.http.delete(environment.apiURL + '/HoaDons/' + hoaDon_ID).toPromise();
  }
  AddHoaDon(hoaDon: HoaDon) : Observable<HoaDon> {
    return this.http.post<HoaDon>(environment.apiURL + '/HoaDons', hoaDon);
  }
 EditHoaDon(hoaDon_ID: number, time : string): Observable<HoaDon> {
return this.http.get<HoaDon>(environment.apiURL + '/HoaDons/UpdateStatusHoaDon?HoaDon_ID=' + hoaDon_ID + "&Time=" + time);

 }

 searchIDHD(BanAn_ID : number) : Observable<HoaDon>{
  return this.http.get<HoaDon>(environment.apiURL + "/GetHoaDonID?BanAn_ID=" + BanAn_ID); 
 }

 updateTotalMoney(totalMoney : number, HoaDon_ID : number) : Observable<HoaDon> {
   return this.http.get<HoaDon>(environment.apiURL + "/HoaDons/UpdateTotalMoney?totalMoney=" + totalMoney + "&HoaDon_ID="  + HoaDon_ID );
 }

}
