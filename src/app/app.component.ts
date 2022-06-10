import { Component, OnInit } from '@angular/core';

import { BasketService } from './basket/basket.service';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService, private basketService: BasketService) {}

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe();
    this.basketService.fetchBasket().subscribe();
  }
}
