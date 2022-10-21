import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DETAIL_DATA_KEY, DETAIL_PARAM_KEY } from './detail/detail.config';
import { DetailResolver } from './detail/detail.resolver';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: `product/:${DETAIL_PARAM_KEY}`,
    component: DetailComponent,
    resolve: {
      [DETAIL_DATA_KEY]: DetailResolver,
    },
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then((m) => m.BasketModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
