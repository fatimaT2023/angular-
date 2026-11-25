import { Component, Input, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  // 📥 Inputs from App
  @Input() productName: string = '';
  @Input() productDescription: string = '';
  @Input() productPrice: number = 0;
  @Input() isAvailable: boolean = false;
  @Input() productImage: string = '';

  // 📤 Output to App
  @Output() addToCart = new EventEmitter<{ name: string; quantity: number }>();

  discountPercentage: number = 10;
  quantity = signal(1);

  getPriceAfterDiscount(): number {
    return this.productPrice - (this.productPrice * this.discountPercentage / 100);
  }

  getTotalPrice(): number {
    return this.getPriceAfterDiscount() * this.quantity();
  }

  increaseQuantity() {
    this.quantity.update(q => q + 1);
  }

  decreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.update(q => q - 1);
    }
  }

  resetQuantity() {
    this.quantity.set(1);
  }

  onAddToCart() {
    this.addToCart.emit({
      name: this.productName,
      quantity: this.quantity()
    });
  }
}