import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  storeName: string = 'ElectroShop';
  welcomeMessage: string = 'Welcome to the shop!';
  slogan: string = 'Everything You Need in One Place';
}