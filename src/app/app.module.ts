import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { APP_NAME } from './app.token';
import { BasketService } from './basket/basket.service';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { Product } from './product/product.types';

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent],
  imports: [BrowserModule],
  providers: [{ provide: APP_NAME, useValue: 'Welcome to Zenika Ecommerces' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
