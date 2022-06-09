import { BehaviorSubject, map, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Product } from '../product/product.types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private _products$ = new BehaviorSubject<Product[]>([]);

  products$ = this._products$.asObservable();

  total$ = this.products$.pipe(map((products) => products.reduce((total, { price }) => total + price, 0)));

  constructor(private httpClient: HttpClient) {}

  fetchBasket() {
    return this.httpClient
      .get<Product[]>(environment.apiBaseUrl + 'basket')
      .pipe(tap((products) => this._products$.next(products)));
  }

  addProduct(product: Product) {
    return this.httpClient
      .post<Product>(environment.apiBaseUrl + 'basket', product)
      .pipe(tap(() => this._products$.next([...this._products$.value, { ...product }])));
  }
}
