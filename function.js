let count = 0;
function findVowel(par){
    for(value of par){
        if(value ==='a'|| value ==='e'|| value ==='i'|| value ==='o'|| value ==='u'){
            count ++;
        }
    }
    return count;
}
// console.log(findVowel('mohit'));

//arrow function
let arrcount =0;
const arrFind = (par)=>{
    for(value of par){
        if(value ==='a'|| value ==='e'|| value ==='i'|| value ==='o'|| value ==='u'){
            arrcount ++;
        }
    }
    return arrcount;
}
// console.log(arrFind('himachal'))

//foreach function

let arr1 = [2,5,8];
arr1.forEach(function(val){
    console.log(val*val)
})

//map method

let cube =arr1.map((val)=>{
   return val**3;
})
console.log(cube);

//filter method
let filArr=[121,12,45,8,44,36,9];
let evenValue = filArr.filter((value)=>{
    return value > 10;
})
console.log(evenValue);


// reduced method

let redArr = [2,3,5,8,10];
let redmethod = redArr.reduce((result, curent)=>{
    return result<curent? result: curent;
})

console.log(redmethod)


//question
let marks = [22,5,92,78,99];
let above = marks.filter((result)=>{
    return result >90;

})
console.log(above)


//Question

let userInput = prompt("enter number from 1 to 100");
let newArr = []
for(let i=0; i<userInput; i++){
    newArr[i]=i+1;
}
let total = newArr.reduce((result, current)=>{
    return result>current
})
console.log(total)
console.log(newArr)

const temperatures = [25, 18, 32, 20, 15];

// Use reduce() with initial values of -Infinity and Infinity
const maxTempReduce = temperatures.reduce((max, temp) => Math.max(max, temp), -Infinity);