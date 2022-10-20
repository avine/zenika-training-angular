import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_NAME } from './app.token';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ArraySorterPipe } from './shared/pipes/array-sorter.pipe';

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent, ArraySorterPipe, HomeComponent, DetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR',
    },
    {
      provide: APP_NAME,
      useValue: 'Welcome to Zenika Ecommerces',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
