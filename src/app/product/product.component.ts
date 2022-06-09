import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from './product.types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;

  @Output() addToBasket = new EventEmitter<Product>();

  emitAddToBasket() {
    this.addToBasket.emit(this.product);
  }
}
