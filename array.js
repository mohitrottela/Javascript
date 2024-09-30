let heros =['ironman','spiderman', 'thor','hulk','antiman'];
console.log(heros);
console.log(heros[2]);//thor
console.log(heros.length)//4
heros.push('shaktimaan');
console.log(heros);
let del = heros.pop();
console.log(del); 
//itration
// for(let val of heros){
//     console.log(val);
// }
// for(let i = 0; i<heros.length; i++){
//     console.log(heros[i]);
// }

let cities =['delhi','chandigarh','gurgram','goa'];
for(let city of cities){
    // console.log(city.toUpperCase());
    // console.log(city.toLowerCase());
    console.log(city.toLocaleLowerCase());
}

let marks = [85,97,44,37,76,60];
let sum = 0;
for(let mark of marks){
    sum +=mark;

}
console.log(sum/marks.length);

let price = [ 250,645,300,900,50];
let discount = 0.10;
let index = 0;
// for(let i=0; i<price.length; i++){
//     console.log(price[i]*discount)
//    price[i] -=price[i]*discount;
// }
// console.log(price);
for(let value of price){
    let offer = value/10
    price[index] = value - offer;
    index ++;
}
console.log(price);
console.log(price.toString());
let con = price.concat(heros)
console.log(con);
let select = price.slice(2,4)//300,900
console.log(select)
let spl = price.splice(2,1,400,500)
console.log(price)

//question 
let company = [ 'bloomberg','microsoft','uber','google','ibm','netflix'];
// let remove=company.shift();
// console.log(remove);
company.splice(2,1,'ola')
console.log(company);
company.push('amazon');
console.log(company)
