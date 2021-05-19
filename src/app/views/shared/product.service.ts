import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

export interface ProductResult {
  errorCode: number;
  errorMessage: string;
  products: [Product];
}

export interface Product {
  id: number;
  code: string;
  name: string;
  unit: string;
  price: number;
  description: string;
}

export interface AProductResult {
  errorCode: number;
  errorMessage: string;
  product: Product;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private api: ApiService, private http: HttpClient) {
  }
  getAll(): Observable<ProductResult> {
    return this.http.get<ProductResult>(this.api.url.products);
  }
  get(id): Observable<AProductResult> {
    return this.http.get<AProductResult>(`${this.api.url.products}?id=${id}`);
  }
  add(product: Product): Observable<AProductResult> {
    return this.http.post<AProductResult>(this.api.url.product, product);
  }
  update(product: Product): Observable<AProductResult> {
    return this.http.put<AProductResult>(`${this.api.url.product}?id=${product.id}`, product);
  }
  delete(id: number): Observable<AProductResult> {
    return this.http.delete<AProductResult>(`${this.api.url.product}?id=${id}`);
  }
}
