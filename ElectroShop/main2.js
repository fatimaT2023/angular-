"use strict";
const products = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];
function loadProducts() {
    const productList = document.getElementById("productList");
    if (productList === null) {
        return;
    }
    productList.innerHTML = "";
    for (let product of products) {
        productList.innerHTML += `
            <div>
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <hr>
            </div>
        `;
    }
}
const loadButton = document.getElementById("loadBtn");
if (loadButton !== null) {
    loadButton.addEventListener("click", loadProducts);
}
