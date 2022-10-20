import { Injectable } from '@angular/core';
import { Product } from '../product/product.types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private basket: Product[] = [];

  getBasket() {
    return this.basket;
  }

  getTotal() {
    return this.basket.reduce((total, product) => total + product.price, 0);
  }

  addProduct(product: Product) {
    this.basket = [...this.basket, { ...product }];
  }
}
