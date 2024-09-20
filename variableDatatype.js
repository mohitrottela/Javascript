//variable and Data type
var fullName = "mohit rottela";// js case sensitive fullName != FullName
var FullName = "mohit";
var age = 32;
var mobileNo = 9213512006;
var dob = "2 sept 1992";
var isMarried = false;
var bodyDetail = {
    hair: "black",
    height: 5.4,
    bodyTone: "fair"
}
var likeFruit = ["mango", "apple", "kiwi"]

console.log(fullName);
console.log(FullName);


// let and const are introduce in 2015(ES6) they are also variables
let person_name = "mahi rottela";
let person_age = 32;
let person_number = 9215334656;
let person_dob = "2 oct 1992";
let person_isMarried = true;
let person_bodyDetail = {
    hair: "brown",
    height: 6,
    bodyTone: "black"
}
let person_fruit = ["lichi", 'grapes', 'banana']

const PI = 3.14; // const variable should be upperCase
const DATE_OF_BIRTH = "2/9/1992";
console.log(DATE_OF_BIRTH);

// Data Type
// string, number, boolean, null, undefined, Bigint, symbol

let name = "mohit"; // string
let count = 123; // number
let isSingle = true; // boolean
let salary = null; // null
let car = undefined; // undefined

const STUDENT ={
    fullName : "Rahul",
    age : 22,
    isPassed : true
}
console.log(STUDENT.fullName);

//Q1) create a const object called "product" to store information shown in picture?

const PRODUCT = {
    itemName : 'ball pen',
    rating : 5, 
    price : 270, 
    discount : 10,
    isOffer : true
}
console.log(PRODUCT.itemName);
console.log(PRODUCT.rating);
console.log(PRODUCT.price);
console.log(PRODUCT.isOffer);

//Q2) create a const object called "profile" to store information shown in picture?

const PROFILE ={
    userName : "mohitmahirottela",
    isFollow : true,
    follower : 34, 
    post : 12,
    following : 2,
    detail : "this is mohit instagram id"
}
console.log(PROFILE)