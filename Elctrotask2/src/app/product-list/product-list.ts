import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
products = [
    {
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 750,
      image:"https://i.pinimg.com/736x/f2/fa/c0/f2fac01d36f90f1f809fb546778f5ecf.jpg",
      available: true
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'https://i.pinimg.com/736x/34/d0/44/34d04498dc09b38bf2f3f9a1658abd0a.jpg',
      available: true
    },
    {
      name: 'Headphones',
      description: 'Wireless headphones',
      price: 80,
      image: 'https://i.pinimg.com/736x/d4/85/cc/d485ccbd2ead9011fd8f0e6def81bffa.jpg',
      available: true
    },
    {
      name: 'Smart Watch',
      description: 'Smart fitness watch',
      price: 120,
      image: 'https://i.pinimg.com/736x/fa/e3/09/fae309bc49c9f2289d941a14147cd51c.jpg',
      available: true
    },
    {
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'https://i.pinimg.com/736x/b2/9d/31/b29d3167b057ff7f543654f5fd2e038c.jpg',
      available: false
    }

  ];
  buyNow(productName: string) {
  alert('Thank you! You bought: ' + productName);
  }
}
