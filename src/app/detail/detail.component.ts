import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../shared/components/product/product.types';
import { DETAIL_DATA_KEY } from './detail.config';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  protected product$ = this.activatedRoute.data.pipe(map((data) => data[DETAIL_DATA_KEY] as Product));

  constructor(private activatedRoute: ActivatedRoute) {}
}
