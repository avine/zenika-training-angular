import { Component, Inject } from '@angular/core';
import { APP_NAME } from '../app.token';
import { BasketService } from '../basket/basket.service';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products$ = this.productService.products$;

  basket$ = this.basketService.basket$;

  total$ = this.basketService.total$;

  sortBy?: keyof Product;

  constructor(
    private productService: ProductService,
    private basketService: BasketService,
    @Inject(APP_NAME) protected appName: string
  ) {}

  protected addToBasket(product: Product) {
    this.basketService.addProduct(product).subscribe(() => this.productService.decreaseLocalStock(product));
  }
}
