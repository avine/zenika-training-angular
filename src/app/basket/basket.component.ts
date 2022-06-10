import { Component } from '@angular/core';
import { Customer } from '../shared/customer.types';

import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  products$ = this.basketService.products$;

  customer: Customer = {
    name: 'Stéphane',
    address: '',
    creditCard: '',
  };

  constructor(private basketService: BasketService) {}

  checkout() {
    console.log('CHECKOUT!');
  }
}
