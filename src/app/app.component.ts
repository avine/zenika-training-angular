import { Component, Inject } from '@angular/core';
import { APP_NAME } from './app.token';
import { BasketService } from './basket/basket.service';
import { ProductService } from './product/product.service';
import { Product } from './product/product.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected title = 'shop';

  protected get products(): Product[] {
    return this.productService.getProducts();
  }

  protected get basket(): Product[] {
    return this.basketService.getBasket();
  }

  protected get total() {
    return this.basketService.getTotal();
  }

  constructor(
    private productService: ProductService,
    private basketService: BasketService,
    @Inject(APP_NAME) protected appName: string
  ) {}

  protected addToBasket(product: Product) {
    this.basketService.addProduct(product);
    this.productService.decreaseStock(product);
  }
}
