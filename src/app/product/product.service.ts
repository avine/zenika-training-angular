import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from './product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productsUrl = `${environment.apiUrl}/products`;

  products$ = new BehaviorSubject<Product[]>([]);

  constructor(private httpClient: HttpClient) {}

  fetch() {
    return this.httpClient.get<Product[]>(this.productsUrl).pipe(tap((products) => this.products$.next(products)));
  }

  decreaseLocalStock({ id }: Product) {
    const products = this.products$.value.map((_product) => {
      if (_product.id === id) {
        return { ..._product, stock: _product.stock - 1 };
      }
      return _product;
    });
    this.products$.next(products);
  }
}
