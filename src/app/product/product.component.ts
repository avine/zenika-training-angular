import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Product } from './product.types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  myinterval = 0;

  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = interval(2000).subscribe((n) => {
      this.myinterval = n;
      // console.log(this.product?.title);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  @Input()
  product!: Product;

  @Output()
  addToBasket = new EventEmitter<Product>();

  triggerAddToBasket() {
    this.addToBasket.emit(this.product);
  }
}
