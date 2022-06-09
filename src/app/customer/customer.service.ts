import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.types';

export class CustomerService {
  basket: Product[] = [];

  addProduct(product: Product) {
    this.basket.push(product);
  }

  getTotal() {
    //let total = 0;
    //return this.basket.forEach(({ price }) => (total += price));

    return this.basket.reduce((total, { price }) => total + price, 0);
  }
}
