import { Injectable } from '@angular/core';
import { Product } from './product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      title: 'Sweat homme',
      description: '<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
      price: 39,
      stock: 3,
    },
    {
      title: 'Tee-Shirt homme',
      description: 'TEE-SHIRT BIO À COL ROND - HOMME',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png',
      price: 19,
      stock: 2,
    },
    {
      title: 'Tee-Shirt femme',
      description: 'TEE-SHIRT BIO À COL ROND - FEMME',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
      price: 19,
      stock: 2,
    },
    {
      title: 'Tote bag',
      description: '<C0D1NG_TH3_W0RLD>, TOTE BAG BIO.',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png',
      price: 12.5,
      stock: 2,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  decreaseStock(product: Product) {
    this.products = this.products.map((_product) => {
      const stock = _product.stock - (_product.title === product.title ? 1 : 0);
      return { ..._product, stock };
    });
  }
}
