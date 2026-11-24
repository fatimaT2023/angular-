import { Component } from '@angular/core';
import { Header } from './header/header';
import { navbar } from './navbar/navbar';     
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [Header, navbar,ProductList,ProductDetails,Footer],                   
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}