import { Component, Input } from '@angular/core';
import { Order } from '../../../../models/order';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {
  removeOrder() {}

  @Input({required : true}) order!: Order;
}
