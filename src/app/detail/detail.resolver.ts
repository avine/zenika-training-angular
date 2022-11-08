import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.types';
import { DETAIL_PARAM_KEY } from './detail.config';

@Injectable({
  providedIn: 'root',
})
export class DetailResolver implements Resolve<Product> {
  constructor(private productService: ProductService) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): Observable<Product> {
    return this.productService.fetchProductDetails(routeSnapshot.params[DETAIL_PARAM_KEY]);
  }
}
