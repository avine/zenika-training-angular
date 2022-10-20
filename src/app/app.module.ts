import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { APP_NAME } from './app.token';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ArraySorterPipe } from './shared/array-sorter.pipe';

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent, ArraySorterPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [{ provide: APP_NAME, useValue: 'Welcome to Zenika Ecommerces' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
