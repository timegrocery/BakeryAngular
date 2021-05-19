import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { NguyenLieu } from './nguyen-lieu.model';

export interface NguyenLieuResult {
  errorCode: number;
  errorMessage: string;
  nguyenLieus: [NguyenLieu];
}
export interface ANguyenLieuResult {
  errorCode: number;
  errorMessage: string;
  nguyenLieu: NguyenLieu;
}


@Injectable({
  providedIn: 'root'
})
export class NguyenLieuService {

  constructor(private http: HttpClient) { }

  getNguyenLieuList(): Observable<NguyenLieu[]> {
    return this.http.get<NguyenLieu[]>(environment.apiURL + '/NguyenLieux');
  }
  getNguyenLieu(NL_ID: number): Observable<NguyenLieu> {
    return this.http.get<NguyenLieu>(environment.apiURL + '/NguyenLieux/' + NL_ID);
  }
  deleteNguyenLieu(NL_ID: number) {
    return this.http.delete(environment.apiURL + '/NguyenLieux/' + NL_ID).toPromise();
  }
  AddNguyenLieu(nguyenLieu: NguyenLieu) {
    return this.http.post(environment.apiURL + '/NguyenLieux', nguyenLieu);
  }
  EditNguyenLieu(NL_ID: number, nguyenLieu: NguyenLieu): Observable<NguyenLieu> {
    return this.http.put<NguyenLieu>(environment.apiURL + '/NguyenLieux/' + NL_ID, nguyenLieu);
  }
}

