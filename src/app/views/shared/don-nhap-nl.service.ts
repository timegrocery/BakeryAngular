import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DonNhapNl } from './don-nhap-nl.model';

@Injectable({
  providedIn: 'root'
})
export class DonNhapNlService {

  constructor(private http: HttpClient) { }

  getDonNhapNLList(): Observable<DonNhapNl[]> {
    return this.http.get<DonNhapNl[]>(environment.apiURL + '/DonNhapNguyenLieux');
   }
   getDonNhapNL(DonNhap_ID: number): Observable<DonNhapNl> {
    return this.http.get<DonNhapNl>(environment.apiURL + '/DonNhapNguyenLieux/' + DonNhap_ID);
   }
   deleteDonNhapNL(DonNhap_ID: number) {
    return this.http.delete(environment.apiURL + '/DonNhapNguyenLieux/' + DonNhap_ID).toPromise();
  }
  AddDonNhapNL(DonNhapNl: DonNhapNl) {
    return this.http.post(environment.apiURL + '/DonNhapNguyenLieux', DonNhapNl);
  }
  EditDonNhapNL(DonNhap_ID: number, DonNhapNl: DonNhapNl): Observable<DonNhapNl> {
    return this.http.put<DonNhapNl>(environment.apiURL + '/DonNhapNguyenLieux/' + DonNhap_ID, DonNhapNl);
 }

}
