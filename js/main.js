// goal 1 : add new products and store them
//    1.1 : need somewhere to store items  --> object
//    1.2 : need to add items along with properties on clicking --> function


// we want to grab the product's properties first --> getElementBy
// i would like to store them into global variables so i can use them anywhere
// also this is better performance-wise, since the browser can just grab the values from html once
// rather than have to read the html file every time a function is invoked

let productNameInput = document.getElementById('productNameInput');
let productCategInput = document.getElementById('productCategInput');
let productPriceInput = document.getElementById('productPriceInput');
let productDescInput = document.getElementById('productDescInput');


// need a function to:
// a. create an object of the product
// b. stores the new product (object) in an array of products objects
// i choose to create this array globally because that is my list of items
//    that i want to work on. i dont just want to add new products, i want to 
//    perform any crud operation on it. i'll have to create functions for
//    each CRUD operation, all with their local scopes and different responsibilities
// so it wouldnt make sense to create this list of inside one of these crud function 

let allProducts = [];


function addNewProduct() {
    // each added item is an object with its own set of properties
    let newProduct = {
        productName: productNameInput.value,
        producCateg: productCategInput.value,
        productPrice: productPriceInput.value,
        productDesc: productDescInput.value
    }

    allProducts.push(newProduct);
    console.log(newProduct);
    



}

console.log(allProducts);














