// // Arithmetic operators

// let a = 10;
// let b = 2;

// //adding
// console.log("a + b =",a+b);
// //subtract
// console.log("a - b =",a-b);
// //multiple
// console.log("a x b =",a*b);
// //divide
// console.log("a / b =",a/b);

// //modulus
// console.log("a % b =", a%b);

// //exponential
// console.log("a ** b =", a**b);

// //increment
// console.log('a++ =', a++);
// console.log("++a =",++a);
// console.log(a)

// // decrement
// console.log('b-- =', b--);
// console.log('--b =', --b);
// console.log('b+4 =', b+4);

// comparison operator
// let a = 2;
// let b = 2;

// console.log("a >= b", a >= b);//true

//logical operator
// let a = 2;
// let b= 2;
// let cond1 = a == b; //true
// let cond2 = a !=b ; // false
// console.log("cond1 && cond2 =", !(cond1 && cond2)); // true
// console.log("cond1 || cond2 =", cond1 || cond2); // true

//conditional statement
// let num = 23;
// if(num % 2 ===0){
//     console.log("Number is even =",num);
// }
// else{
//     console.log("Number is odd =", num);
// }

//ternary operator
// let mode = "pink";
// let color = mode === "dark"? "black":"white";
// console.log("color =", color);

//question
// let num = prompt("enter number 0-100");
// if(num % 5 == 0){
//     console.log("number is multiple of 5 ", num);
// }
// else{
//     console.log("number is not multiple of 5", num);
// }
// let val= num % 5 == 0?'number is multiple of 5 ':"number is not multiple of 5";
// console.log(val, num);

//question 2
let score = 95;
let grade;
if(score <= 100 && score >=90){
    grade = 'A'
}
else if(score <= 89 && score >69){
grade = 'B'
}
console.log("student get grade =", grade);