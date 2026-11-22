const names:string="Electroshop";
const description:string="An online electronics store";
let availableproducts:number=5;
const currency: string="JD";
const productPrice: number = 500;
let isOpen:boolean=true;

const data: string[] = [
    "Mobile Phone",
    "Mouse",
    "Laptop",
    "Keyboard",
    "Headphones"
];

const arr: (string | number | boolean)[] = [
    "Laptop",
    500,
    true
];


if (isOpen ){
    console.log("the shope is open");

}else{
    console.log("the shope is closed");
}


if (productPrice >500){
    console.log("Expensive Product");
}else if(productPrice >=100 && productPrice <=500 ){
    console.log("Medium Price.");
}else{
    console.log("Affordable Product");
}

for (const product of data){
    console.log(product)
}

const prices: number[] = [500, 20, 750, 100, 80];
let count: number = 0;
for(let i of prices){
    if(i >=100){
        count++;
    }
}
console.log("Products priced above 100:",count);


function calculateDiscount(
    originalPrice: number,
    discountPercentage: number
): number {
  const value =discountPercentage*originalPrice/100;
  const fainal=originalPrice-value;
   
   return fainal;
}

console.log(calculateDiscount(200,10));


function checkProductAvailability(quantity:number):string{
    if(quantity >0){
        return"in stock";
    }else{
           return"out of stock";
    }
}

console.log(checkProductAvailability(5));
console.log(checkProductAvailability(0));


function displayStoreMessage(message:string):void{
    console.log(message);
}
displayStoreMessage("Welcome to ElectroShop!");


function displayProductInfo(name:string,price :number,description?:string,Currency:string="USD"):void{
    console.log(name);
    console.log(`the price is : ${price} and the cuurent currency is:${Currency}.`);

   if (description){
    console.log(description);

   }
}

displayProductInfo("laptop",400);
displayProductInfo("Mouse", 20, "Wireless mouse", "JOD");


function calculateTotalPrice(...prices:number[]):number{
 
let total: number = 0;

for (let price of prices) {
    total += price;
}

return total;
}

console.log(calculateTotalPrice(100,200,50,150));


