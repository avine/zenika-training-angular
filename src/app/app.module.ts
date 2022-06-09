import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BRAND_TITLE } from './brand-title.token';
import { CustomerService } from './customer/customer.service';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    CustomerService,
    {
      provide: BRAND_TITLE,
      useValue: 'Welcome to Zenika Ecommerces!',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
