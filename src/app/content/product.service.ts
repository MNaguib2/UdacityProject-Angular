import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwIfEmpty } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable()


export class ProductService {

  constructor(private http: HttpClient) { }
 

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiHost}Products`);
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiHost}Products/${id}`);
  }
  
}
