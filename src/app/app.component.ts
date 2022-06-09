import { Component, Inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { BRAND_TITLE } from './brand-title.token';
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
    @Inject(BRAND_TITLE) public title: string
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
