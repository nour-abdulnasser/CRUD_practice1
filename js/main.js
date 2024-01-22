
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
        name: productNameInput.value,
        category: productCategInput.value,
        price: productPriceInput.value,
        description: productDescInput.value
    }

    allProducts.push(newProduct);
    // console.log(newProduct);

    localStorage.setItem("allProds", JSON.stringify(allProducts));

    clearForm();
    displayProduct(allProducts);


}

if (localStorage.getItem("allProds") != null){
    /* note: the condition can also be written as (localStorage.getItem("allProds")) only */
    allProducts = JSON.parse(localStorage.getItem("allProds"));
    displayProduct(allProducts);        // keeps the table displayed even after reload
} else {
    allProducts = []; 
}

function clearForm(){
    productNameInput.value ='';
    productCategInput.value ='';
    productPriceInput.value ='';
    productDescInput.value ='';
}

function displayProduct(arr){
    var tableBodyString = '';
    for (var i = 0; i<arr.length; i++){
        tableBodyString = tableBodyString + `
        <tr>
            <td>${i+1}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].price}</td>
            <td>${arr[i].category}</td>
            <td>${arr[i].description}</td>
            <td><button class= 'btn btn-warning' onclick='setFormForUpdate(${i})'> Update </button></td>
            <td><button class= 'btn btn-danger' onclick="deleteProduct(${i})" > Delete </button></td>
        </tr>
        `
    }

    document.getElementById('tableBody').innerHTML = tableBodyString;

}



// search functionality

// .includes( --- ) is helpful for this, returns boolean value

/* *********** 1. results on click *********** */

// var searchTerm = document.getElementById('searchInput').value; // does not work on click

// function searchProducts(){
//     var searchTerm = document.getElementById('searchInput').value;
//     console.log((searchTerm)); // note: works when paired with <<  var searchTerm = document.getElementById('searchInput').value; >> 
//     var searchResults = [];
//     console.log(allProducts);
//     for ( var i = 0; i < allProducts.length; i++){
//         var x = allProducts[i].name;
//         // if(allProducts[i].name.toLowerCase().includes(searchTerm.value)){
//             if(x.toLowerCase().includes(searchTerm)){
//                 // console.log(x);
//                 searchResults.push(allProducts[i]);
//             }
//         }
//         // console.log(searchResults[0]);
//         displayProduct(searchResults); 
//     // console.log(searchTerm); // note: this paired with << var searchTerm = document.getElementById('searchInput').value >> above in function doesnt work
// }

/* *********** 2. results in real time *********** */

function searchProducts(searchTerm){
    var searchResults = [];
    console.log(allProducts);
    for ( var i = 0; i < allProducts.length; i++){
        var x = allProducts[i].name;
            if(x.toLowerCase().includes(searchTerm)){
                searchResults.push(allProducts[i]);
            }
        }
        displayProduct(searchResults); 
}

// delete product

function deleteProduct(productIndex){
    allProducts.splice(productIndex, 1);
    localStorage.setItem('allProds', JSON.stringify(allProducts));
    displayProduct(allProducts);

}
// to change in local storage: must overwrite original (set again)
// clear or removeItem will remove entire key

var updatedProdIndex;


// update
function setFormForUpdate(productIndex){
    productNameInput.value = allProducts[productIndex].name;
    productCategInput.value = allProducts[productIndex].category;
    productPriceInput.value = allProducts[productIndex].price;
    productDescInput.value = allProducts[productIndex].description;
    document.getElementById('addBtn').classList.add("d-none");
    document.querySelector('#updateBtn').classList.remove("d-none");
    
    updatedProdIndex = productIndex;


}

function updateForm(){

    var updatedProduct = {
        name: productNameInput.value,
        category: productCategInput.value,
        price: productPriceInput.value,
        description: productDescInput.value
    }

    allProducts.splice(updatedProdIndex, 1, updatedProduct);
    // console.log(newProduct);

    localStorage.setItem("allProds", JSON.stringify(allProducts));

    clearForm();
    displayProduct(allProducts);
    document.querySelector('#addBtn').classList.remove("d-none");
    document.querySelector('#updateBtn').classList.add("d-none");

}









// local storage

// localStorage.setItem( Key , Value ); // value must be in string form
// using toString() loses the ability for the stringified object to be understood as an object once again
// JSON solves this issue
// localStorage.getItem( Key );
// localStorage.removeItem( Key ); 
// localStorage.clear();            // clears all loc storage items
// localStorage.length();           // number of keys in loc stor

// JSON.parse( --- ) // de-stringify











