import { Component } from '@angular/core';
import { NgClass ,NgStyle} from '@angular/common';
interface Product{
    id:number;
    name:string;
    price:number;
    category:string;
    isAvailable:boolean;
    discount:number;
    image:string;
  }
@Component({
  imports: [NgClass,NgStyle],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
 
export class ProductList {
orderStatus: string = "Pending";
selectedCategory: string = "All Products";
products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 850,
    category: "Electronics",
    isAvailable: true,
    discount: 15,
    image: "laptop.jpg"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 450,
    category: "Electronics",
    isAvailable: true,
    discount: 0,
    image: "smartphone.jpg"
  },
  {
    id: 3,
    name: "Headphones",
    price: 120,
    category: "Accessories",
    isAvailable: false,
    discount: 10,
    image: "headphones.jpg"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 180,
    category: "Accessories",
    isAvailable: true,
    discount: 20,
    image: "smartwatch.jpg"
  },
  {
    id: 5,
    name: "Tablet",
    price: 300,
    category: "Electronics",
    isAvailable: false,
    discount: 5,
    image: "tablet.jpg"
  },
  {
    id: 6,
    name: "Keyboard",
    price: 65,
    category: "Accessories",
    isAvailable: true,
    discount: 0,
    image: "keyboard.jpg"
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 45,
    category: "Accessories",
    isAvailable: true,
    discount: 10,
    image: "mouse.jpg"
  },
  {
    id: 8,
    name: "Monitor",
    price: 220,
    category: "Electronics",
    isAvailable: false,
    discount: 0,
    image: "monitor.jpg"
  }
];
}

