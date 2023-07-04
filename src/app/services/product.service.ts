import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>('https://dummyjson.com/products', {
      params: { limit: '16' },
    });
  }
}
