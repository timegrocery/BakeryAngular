import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ReportQuantity } from './report-quantity.model';
import { environment } from '../../../environments/environment';
import { fromStringWithSourceMap } from 'source-list-map';


@Injectable({
  providedIn: 'root'
})
export class ReportQuantityService {

  constructor(private api: ApiService, private http: HttpClient) { }

  getReport(fromdate: string, todate: string): Observable<ReportQuantity[]> {
    return this.http.get<ReportQuantity[]>(environment.apiURL + '/ReportQuantity?datefrom='+fromdate+'&dateto='+todate);
  }    
}
