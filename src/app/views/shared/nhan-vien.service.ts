import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { NhanVien } from './nhan-vien.model';

@Injectable({
  providedIn: 'root'
})
export class NhanVienService {

  constructor(private http: HttpClient) { }

  getNhanVienList(): Observable<NhanVien[]> {
    return this.http.get<NhanVien[]>(environment.apiURL + '/NhanViens');
  }

  getNhanVien(NV_ID: number): Observable<NhanVien>  {
    return this.http.get<NhanVien>(environment.apiURL + '/NhanViens/' + NV_ID);
  }

  deleteNhanVien(NV_ID: number) {
    return this.http.delete(environment.apiURL + '/NhanViens/' + NV_ID).toPromise();
  }

  AddNhanVien(nhanVien: NhanVien) {
    return this.http.post(environment.apiURL + '/NhanViens/', nhanVien);
  }

  EditNhanVien(NV_ID: number, nhanVien: NhanVien): Observable<NhanVien> {
    return this.http.put<NhanVien>(environment.apiURL + '/NhanViens/' + NV_ID, nhanVien);
   }
}
