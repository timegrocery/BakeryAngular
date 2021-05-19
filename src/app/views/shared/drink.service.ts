import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Drink } from './drink.model';


@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  constructor(private http: HttpClient) { }

  getDrinkList(): Observable<Drink[]> {
    return this.http.get<Drink[]>(environment.apiURL + '/NuocUongs');
  }
  getDrink(Nuoc_ID: number): Observable<Drink> {
    return this.http.get<Drink>(environment.apiURL + '/NuocUongs/' + Nuoc_ID);
  }

  deleteDrink(Nuoc_ID: number) {
    return this.http.delete(environment.apiURL + '/NuocUongs/' + Nuoc_ID).toPromise();
  }

  addDrink(drink: Drink) {
    return this.http.post(environment.apiURL + '/NuocUongs', drink);
  }

  editDrink(Nuoc_ID: number, drink: Drink): Observable<Drink> {
    return this.http.put<Drink>(environment.apiURL + '/NuocUongs/' + Nuoc_ID, drink);
  }
}
