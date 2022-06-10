import { Component } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  products$ = this.basketService.products$;

  constructor(private basketService: BasketService) {}
}
