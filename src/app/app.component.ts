import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { BasketService } from './basket/basket.service';
import { ProductService } from './shared/components/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService, private basketService: BasketService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    zip([this.productService.fetch(), this.basketService.fetch()]).subscribe();
  }
}
