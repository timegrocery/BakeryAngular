import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CtDonNhapNl } from './ct-don-nhap-nl.model';

@Injectable({
  providedIn: 'root'
})
export class CtDonNhapNlService {

  constructor(private http: HttpClient) { }

  getChiTietDonNhapNLList(): Observable<CtDonNhapNl[]> {
    return this.http.get<CtDonNhapNl[]>(environment.apiURL + '/ChiTietDonNhaps');
  }
  getChiTietDonNhap(CTDonNhap_ID: number): Observable<CtDonNhapNl>  {
    return this.http.get<CtDonNhapNl>(environment.apiURL + '/ChiTietDonNhaps/' + CTDonNhap_ID);
  }

  deleteChiTietDonNhap(CTDonNhap_ID: number) {
    return this.http.delete(environment.apiURL + '/ChiTietDonNhaps/' + CTDonNhap_ID).toPromise();
  }

  AddChiTietDonNhap(ctDonNhapNl: CtDonNhapNl) {
    return this.http.post(environment.apiURL + '/ChiTietDonNhaps', ctDonNhapNl);
  }
  EditChiTietDonNhap(CTDonNhap_ID: number, ctDonNhapNl: CtDonNhapNl): Observable<CtDonNhapNl> {
    return this.http.put<CtDonNhapNl>(environment.apiURL + '/ChiTietDonNhaps/' + CTDonNhap_ID, ctDonNhapNl);

 }
}
