import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { navbar } from './navbar/navbar';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, navbar, ProductList, ProductDetails, ShoppingCart, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //  Product signals (sent to ProductDetails)
  productName = signal('Laptop');
  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');
  productPrice = signal(850);
  isAvailable = signal(true);
  productImage = signal('https://i.pinimg.com/736x/f2/fa/c0/f2fac01d36f90f1f809fb546778f5ecf.jpg');

  // Cart signals (sent to ShoppingCart)
  cartProductName = signal('');
  cartQuantity = signal(0);
  cartPrice = signal(0);

  //  Receives the event from ProductDetails
  onAddToCart(item: { name: string; quantity: number }) {
    this.cartProductName.set(item.name);
    this.cartQuantity.set(item.quantity);
    this.cartPrice.set(this.productPrice());
  }

  //  Switch products
  showLaptop() {
    this.productName.set('Laptop');
    this.productDescription.set('Dell Laptop, Core i7, 16GB RAM');
    this.productPrice.set(850);
    this.isAvailable.set(true);
    this.productImage.set('https://i.pinimg.com/736x/f2/fa/c0/f2fac01d36f90f1f809fb546778f5ecf.jpg');
  }

  showHeadphones() {
    this.productName.set('Wireless Headphones');
    this.productDescription.set('Bluetooth Headphones');
    this.productPrice.set(120);
    this.isAvailable.set(true);
    this.productImage.set('https://i.pinimg.com/736x/d4/85/cc/d485ccbd2ead9011fd8f0e6def81bffa.jpg');
  }
}