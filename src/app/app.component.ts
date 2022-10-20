import { Component, Inject, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { APP_NAME } from './app.token';
import { BasketService } from './basket/basket.service';
import { ProductService } from './product/product.service';
import { Product } from './product/product.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  protected title = 'shop';

  products$ = this.productService.products$;

  basket$ = this.basketService.basket$;

  total$ = this.basketService.total$;

  sortBy?: keyof Product;

  constructor(
    private productService: ProductService,
    private basketService: BasketService,
    @Inject(APP_NAME) protected appName: string
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    zip([this.productService.fetch(), this.basketService.fetch()]).subscribe();
  }

  protected addToBasket(product: Product) {
    this.basketService.addProduct(product).subscribe(() => this.productService.decreaseLocalStock(product));
  }
}
