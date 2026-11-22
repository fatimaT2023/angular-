"use strict";
const names = "Electroshop";
const description = "An online electronics store";
let availableproducts = 5;
const currency = "JD";
const productPrice = 500;
let isOpen = true;
const data = [
    "Mobile Phone",
    "Mouse",
    "Laptop",
    "Keyboard",
    "Headphones"
];
const arr = [
    "Laptop",
    500,
    true
];
if (isOpen) {
    console.log("the shope is open");
}
else {
    console.log("the shope is closed");
}
if (productPrice > 500) {
    console.log("Expensive Product");
}
else if (productPrice >= 100 && productPrice <= 500) {
    console.log("Medium Price.");
}
else {
    console.log("Affordable Product");
}
for (const product of data) {
    console.log(product);
}
const prices = [500, 20, 750, 100, 80];
let count = 0;
for (let i of prices) {
    if (i >= 100) {
        count++;
    }
}
console.log("Products priced above 100:", count);
function calculateDiscount(originalPrice, discountPercentage) {
    const value = discountPercentage * originalPrice / 100;
    const fainal = originalPrice - value;
    return fainal;
}
console.log(calculateDiscount(200, 10));
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "in stock";
    }
    else {
        return "out of stock";
    }
}
console.log(checkProductAvailability(5));
console.log(checkProductAvailability(0));
function displayStoreMessage(message) {
    console.log(message);
}
displayStoreMessage("Welcome to ElectroShop!");
function displayProductInfo(name, price, description, Currency = "USD") {
    console.log(name);
    console.log(`the price is : ${price} and the cuurent currency is:${Currency}.`);
    if (description) {
        console.log(description);
    }
}
displayProductInfo("laptop", 400);
displayProductInfo("Mouse", 20, "Wireless mouse", "JOD");
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 150));
