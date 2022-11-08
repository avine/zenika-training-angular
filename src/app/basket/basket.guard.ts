import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { BasketService } from './basket.service';

@Injectable({
  providedIn: 'root',
})
export class BasketGuard implements CanActivate {
  constructor(private basketService: BasketService) {}

  canActivate(): Observable<boolean> {
    return this.basketService.basket$.pipe(
      first(),
      map(({ length }) => length !== 0)
    );
  }
}
