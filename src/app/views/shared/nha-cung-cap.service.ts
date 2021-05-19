import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { NhaCungCap } from './nha-cung-cap.model';

@Injectable({
  providedIn: 'root'
})
export class NhaCungCapService {


  constructor(private http: HttpClient) { }

  getNhaCungCapList(): Observable<NhaCungCap[]> {
    return this.http.get<NhaCungCap[]>(environment.apiURL + '/NhaCungCaps');
   }
   getNhaCungCap(NCC_ID: number): Observable<NhaCungCap>  {
    return this.http.get<NhaCungCap>(environment.apiURL + '/NhaCungCaps/' + NCC_ID);
  }
   deleteNhaCungCap(NCC_ID: number) {
    return this.http.delete(environment.apiURL + '/NhaCungCaps/' + NCC_ID).toPromise();
  }
  AddNhaCungCap(nhaCungCap: NhaCungCap) {
    return this.http.post(environment.apiURL + '/NhaCungCaps', nhaCungCap);
  }
 EditNhaCungCap(NCC_ID: number, nhaCungCap: NhaCungCap): Observable<NhaCungCap> {
return this.http.put<NhaCungCap>(environment.apiURL + '/NhaCungCaps/' + NCC_ID, nhaCungCap);
 }
}
