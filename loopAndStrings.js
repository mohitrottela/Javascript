//for loop

// for(let i= 0; i<7; i++){
//     console.log("print value =", i);
// }

// // calculat 1 to 10

// let sum =0 ;
// let num =prompt("enter value ");
// for(let i=0;i<=num;i++){
//     sum += i;
// }
// console.log(sum);

// While loop
// let i= 0;
// while(i<=5){
//     console.log(i);
//     i++
// }

//Do while loop

// let num = 0;
// do{
//    console.log(num);
//    num++ ;
// }
// while(num<=10)

//for- of loop used in arrays and strings

// let strvar= "mohit";
// for(let val of strvar){
//     console.log(val);
// }

// for-in loop used in object

// const STD = {
//     fullname: "mohit",
//     age:32,
//     class:12,
//     marks:99
// }

// for(let val in STD){
//     console.log(val)
// }

//find even number

// let number = 20;
// for(let i=0; i<=number; i++){
//     if(i%2 == 0){
//         console.log("it is a even number =", i)
//     }
// }

// guess the correct value 

// let value = prompt('guess the correct number');
// let num = 10;
// while(num != value){
//     value = prompt("try again");
// }
// console.log("you won")

// string in Js
// let str = "viral";
// console.log(str.length);

// let obj = {
//    product:"pen",
//    price:10
// }

// let specialStr= `The cost \n of the ${obj.product} is ${obj.price}`; // Template literals
// console.log(specialStr)

//String Method in js
// let str = "mohit rottela";
// let str1 = "nick name";
// let newStr = str.trim();
// console.log(newStr);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(3,7))//it ro
// console.log(str.concat( str1))//mohit rottela nick name 
// console.log(str.replace("tt","ut"))//mohit routela

//Question
let userInput = prompt("enter you full Name");
let userInputSize = userInput.length;
let userName = `@${userInput}${userInputSize}`;
console.log(userName);