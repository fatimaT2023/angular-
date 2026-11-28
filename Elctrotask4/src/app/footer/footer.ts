import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  storeName: string = 'ElectroShop';
  storeAddress: string = 'Mecca Street, Amman, Jordan';
  contactEmail: string = 'support@electroshop.com';
  phoneNumber: string = '+962 79 000 0000';
  year: number = new Date().getFullYear();
  copyrightMessage: string = 'All rights reserved.';
}