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
      image: 'https://picsum.photos/seed/laptop/300/200',
      available: true
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'https://picsum.photos/seed/laptop/300/200',
      available: true
    },
    {
      name: 'Headphones',
      description: 'Wireless headphones',
      price: 80,
      image: 'https://picsum.photos/seed/laptop/300/200',
      available: true
    },
    {
      name: 'Smart Watch',
      description: 'Smart fitness watch',
      price: 120,
      image: 'https://picsum.photos/seed/laptop/300/200',
      available: true
    },
    {
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'https://picsum.photos/seed/laptop/300/200',
      available: false
    }

  ];
  buyNow(productName: string) {
  alert('Thank you! You bought: ' + productName);
  }
}
