import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BasketService } from '../basket/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  basketCount$ = this.basketService.products$.pipe(map((products) => products.length));

  constructor(private basketService: BasketService) {}
}
