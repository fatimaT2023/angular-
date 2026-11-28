import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css'
})
export class ShoppingCart {
  @Input() productName: string = '';
  @Input() price: number = 0;
  @Input() quantity: number = 0;

  getTotalPrice(): number {
    return this.price * this.quantity;
  }
}