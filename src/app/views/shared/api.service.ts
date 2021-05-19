import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  baseUrl = 'http://www.saigontech.edu.vn/restful-api/';
  url = {
    login: this.baseUrl + 'login.php',
    products: this.baseUrl + 'products.php',
    product: this.baseUrl + 'product.php'
  };
}
