import { Injectable } from '@angular/core';
import { Product } from './product.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:8080/rest/products');
  }

  isTheLast(product: Product) {
    return product.stock === 1;
  }

  isAvailable(product: Product) {
    return product.stock > 0;
  }

  decreaseStock(product: Product) {
    if (product.stock === 0) {
      return;
    }
    product.stock -= 1;
  }
}
