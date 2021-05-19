import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CtMonAn } from './ct-mon-an.model';

@Injectable({
  providedIn: 'root'
})
export class CtMonAnService {

  constructor(private http: HttpClient) { }

  getChiTietMonAnList(): Observable<CtMonAn[]> {
    return this.http.get<CtMonAn[]>(environment.apiURL + '/ChiTietMonAns');
  }
  getChiTietMonAn(MonAn_ID: number): Observable<CtMonAn> {
    return this.http.get<CtMonAn>(environment.apiURL + '/ChiTietMonAns/' + MonAn_ID);
  }
  deleteChiTietMonAn(CTMonAn_ID: number) {
    return this.http.delete(environment.apiURL + '/ChiTietMonAns/' + CTMonAn_ID).toPromise();
  }
  AddChiTietMonAn(ctmonAn: CtMonAn) {
    return this.http.post(environment.apiURL + '/ChiTietMonAns', ctmonAn);
  }
  EditChiTietMonAn(CTMonAn_ID: number, CTMonAn: CtMonAn): Observable<CtMonAn> {
    return this.http.put<CtMonAn>(environment.apiURL + '/ChiTietMonAns/' + CTMonAn_ID, CTMonAn);

  }
}
