import { Component, Inject, OnInit } from '@angular/core';
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

  mydate = new Date();

  constructor(
    private productService: ProductService,
    public customerService: CustomerService,
    @Inject(BRAND_TITLE) public title: string
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToBasket(product: Product) {
    this.productService.decreaseStock(product);
    this.customerService.addProduct(product);
  }
}
