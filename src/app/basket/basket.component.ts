import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasketService } from './basket.service';
import { Customer } from './basket.types';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent {
  @ViewChild('checkoutForm') checkoutForm!: NgForm;

  protected basket$ = this.basketService.basket$;

  protected customer: Customer = {
    name: '',
    address: '',
    creditCard: '',
  };

  protected orderNumber?: number;

  constructor(private basketService: BasketService) {}

  onSubmit() {
    this.checkoutForm.form.disable();
    this.basketService.checkout(this.customer).subscribe(({ orderNumber }) => (this.orderNumber = orderNumber));
  }
}
