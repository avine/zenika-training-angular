import { Component } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent {
  protected basket$ = this.basketService.basket$;

  constructor(private basketService: BasketService) {}
}
