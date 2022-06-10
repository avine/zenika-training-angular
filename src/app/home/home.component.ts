import { Component, Inject } from '@angular/core';
import { APP_TITLE } from '../app.token';
import { BasketService } from '../basket/basket.service';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products$ = this.productService.products$;

  total$ = this.basketService.total$;

  constructor(
    private productService: ProductService,
    private basketService: BasketService,
    @Inject(APP_TITLE) public appTitle: string
  ) {}

  addToBasket(product: Product) {
    this.basketService.addProduct(product).subscribe(() => {
      /* Ici on donne au Front l'intelligence de diminuer le stock du produit. */
      // this.productService.decreaseStock(product);

      /* Là, on demande au Back de nous renvoyer la donnée modifiée. */
      this.productService.fetchProducts().subscribe();
    });
  }
}
