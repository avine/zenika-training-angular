import { Component, Inject, OnInit } from '@angular/core';

import { APP_TITLE } from './app.token';
import { CustomerService } from './customer/customer.service';
import { ProductService } from './product/product.service';
import { Product } from './product/product.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  basket: Product[] = [];

  constructor(
    private productService: ProductService,
    public customerService: CustomerService,
    @Inject(APP_TITLE) public appTitle: string
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });

    this.customerService.getBasket().subscribe((basket) => {
      this.basket = basket;
    });
  }

  addToBasket(product: Product) {
    this.customerService.addProduct(product).subscribe(() => {
      this.productService.decreaseStock(product);
    });
  }
}
