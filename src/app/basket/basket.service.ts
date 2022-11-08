import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../product/product.types';
import { Customer } from './basket.types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private readonly basketUrl = `${environment.apiUrl}/basket`;

  basket$ = new BehaviorSubject<Product[]>([]);

  total$ = this.basket$.pipe(map((basket) => basket.reduce((total, product) => total + product.price, 0)));

  constructor(private httpClient: HttpClient) {}

  fetch() {
    return this.httpClient.get<Product[]>(this.basketUrl).pipe(tap((basket) => this.basket$.next(basket)));
  }

  addProduct(product: Product) {
    return this.httpClient.post<Product>(this.basketUrl, product).pipe(tap(() => this.addLocalProduct(product)));
  }

  checkout(customer: Customer) {
    return this.httpClient
      .post<{ orderNumber: number }>(`${this.basketUrl}/confirm`, customer)
      .pipe(tap(() => this.resetLocalProduct()));
  }

  private addLocalProduct(product: Product) {
    this.basket$.next([...this.basket$.value, product]);
  }

  private resetLocalProduct() {
    this.basket$.next([]);
  }
}
