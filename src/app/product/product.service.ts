import { BehaviorSubject, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Product } from './product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products$ = new BehaviorSubject<Product[]>([]);

  products$ = this._products$.asObservable();

  constructor(private httpClient: HttpClient) {}

  fetchProducts() {
    return this.httpClient
      .get<Product[]>(environment.apiBaseUrl + 'products')
      .pipe(tap((products) => this._products$.next(products)));
  }

  decreaseStock(product: Product) {
    /* Cette implémentation suppose que `product` fait bien référence à l'un des éléments du tableau contenu dans l'Observable `_products$`. */
    // product.stock -= 1;
    // this._products$.next([...this._products$.value]);

    /* Cette fois on identifie le produit à modifier dans le tableau propriétaire de la donnée */
    const products = [...this._products$.value];
    const productToDecrease = products.find(({ id }) => id === product.id);
    if (!productToDecrease) {
      return;
    }
    productToDecrease.stock -= 1;
    this._products$.next(products);
  }
}
