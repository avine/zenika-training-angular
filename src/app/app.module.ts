import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_TITLE } from './app.token';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: APP_TITLE,
      useValue: 'Welcome to Zenika Ecommerces!',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
