import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket.component';
import { BasketGuard } from './basket.guard';

const routes: Routes = [
  {
    path: '',
    component: BasketComponent,
    canActivate: [BasketGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketRoutingModule {}
