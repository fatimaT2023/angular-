import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  productName: string = 'Laptop';
  productDescription: string = 'High-performance laptop with 16GB RAM, 512GB SSD and a 15.6 inch Full HD display. Perfect for work, study and gaming.';
  productPrice: number = 750;
  productImage: string = 'https://picsum.photos/seed/laptop/500/350';
  quantity: number = 1;
  isAvailable: boolean = true;
  discountPercentage: number = 10;


  getPriceAfterDiscount(): number {
    return this.productPrice - (this.productPrice * this.discountPercentage / 100);
  }

getTotalPrice(): number {
    return this.getPriceAfterDiscount() * this.quantity;
  }
increaseQuantity() {
    this.quantity++;
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    alert(this.quantity + ' x ' + this.productName + ' added to cart! Total: ' + this.getTotalPrice() + ' JD');
  }
}

