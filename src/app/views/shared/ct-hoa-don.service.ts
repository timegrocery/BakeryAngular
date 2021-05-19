import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CtHoaDon } from './ct-hoa-don.model';

@Injectable({
  providedIn: 'root'
})
export class CtHoaDonService {

  constructor(private http: HttpClient) { }

  getChiTietHoaDonList(): Observable<CtHoaDon[]> {
    return this.http.get<CtHoaDon[]>(environment.apiURL + '/ChiTietHoaDons');
   }
   getChiTietHoaDon(ctHoaDon_ID: number): Observable<CtHoaDon>  {
    return this.http.get<CtHoaDon>(environment.apiURL + '/ChiTietHoaDons/' + ctHoaDon_ID);
  }
   deleteChiTietHoaDon(ctHoaDon_ID: number) {
    return this.http.delete(environment.apiURL + '/ChiTietHoaDons/' + ctHoaDon_ID).toPromise();
  }
  AddChiTietHoaDon(ctHoaDon: CtHoaDon) {
    return this.http.post(environment.apiURL + '/ChiTietHoaDons', ctHoaDon);
  }
 EditChiTietHoaDon(ctHoaDon_ID: number, ctHoaDon: CtHoaDon): Observable<CtHoaDon> {
return this.http.put<CtHoaDon>(environment.apiURL + '/ChiTietHoaDons/' + ctHoaDon_ID, ctHoaDon);

 }
//lấy chi tiết hóa đơn của một hóa đơn
 getChiTietHDOfAHOADON(HoaDon_id : number) : Observable<CtHoaDon[]> {
  return this.http.get<CtHoaDon[]>(environment.apiURL + '/GetCTHDOFHD?HoaDon_id=' + HoaDon_id);
 }


}
