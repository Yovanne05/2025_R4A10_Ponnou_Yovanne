import { Component, Input } from '@angular/core';
import { Order } from '../../../../models/order';
import { OrderLocalService } from '../../../../services/order.service';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {

  constructor(private readonly orderService: OrderLocalService) {}

  @Input({required : true}) order!: Order;

  removeOrder() {
    this.orderService.remove(this.order.id);
  }
}
