import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ProductService } from '../shared/components/product/product.service';
import { Product } from '../shared/components/product/product.types';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  protected product?: Product;

  private subscription?: Subscription;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.productService.fetchProductDetails(id)))
      .subscribe((product) => (this.product = product));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
