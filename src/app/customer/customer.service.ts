import { tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../product/product.types';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  basket: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  getBasket() {
    return this.httpClient
      .get<Product[]>('http://localhost:8080/rest/basket')
      .pipe(tap((basket) => (this.basket = basket)));
  }

  addProduct(product: Product) {
    return this.httpClient.post<Product>('http://localhost:8080/rest/basket', product).pipe(
      tap((product) => {
        this.basket.push(product);
      })
    );
  }

  getTotal() {
    return this.basket.reduce((total, { price }) => total + price, 0);
  }
}
