import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop--no-standalone');
  name:string="ElectroShop";
  Description:string="Your favorite electronics store";
  Address:string="Amman, Jordan";
  totalProduct:number=12;
 isStoreOpen: boolean = true;
  currency:string="USD";
  productNames:string[]=["Laptop","Smartphone","Headphones","Smart Watch","Keyboard"];
  productPrices:number[]=[750,450,80,120,45];
  featuredProduct={
    name:"mouse",
    price:12,
    description:"a bloototh mouse"
  };

getStoreStatus():string {
  if(this.isStoreOpen){
    return "We are open";
  }else{
    return "We are not open ";
  }
}
discountPercentage:number=0;
discountAmount:number=0;
getDiscountedPrice():number{
  if(this.discountPercentage >0){
    this.discountAmount=this.featuredProduct.price * this.discountPercentage /100;
    return this.featuredProduct.price -this.discountAmount;
  
   }else{
  return this.featuredProduct.price;
    }
}

// productPrices: number[] = [750, 450, 80, 120, 45];

totalProducts: number = 0;
mostExpensivePrice: number = 0;
cheapestPrice: number = 0;
totalValue: number = 0;

calculateStoreSummary(): void {

  this.totalProducts = this.productPrices.length;

  this.mostExpensivePrice = this.productPrices[0];
  this.cheapestPrice = this.productPrices[0];
  this.totalValue = 0;

  for (let i = 0; i < this.productPrices.length; i++) {

    let price = this.productPrices[i];

    if (price > this.mostExpensivePrice) {
      this.mostExpensivePrice = price;
    }

    if (price < this.cheapestPrice) {
      this.cheapestPrice = price;
    }

    this.totalValue += price;
  }
}

ngOnInit(): void {
  this.calculateStoreSummary();
}
}
