import { Component } from '@angular/core';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [CustomerService],
})
export class MenuComponent {
  constructor(customerService: CustomerService) {
    console.log(customerService);
  }
}
