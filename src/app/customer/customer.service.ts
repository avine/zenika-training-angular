import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.types';

@Injectable()
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
    //let total = 0;
    //return this.basket.forEach(({ price }) => (total += price));

    return this.basket.reduce((total, { price }) => total + price, 0);
  }
}
