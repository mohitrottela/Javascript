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
