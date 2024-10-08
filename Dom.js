// selecting with ID
let myId = document.getElementById('myId');
console.dir(myId);

//selecting with Class
let myClass = document.getElementsByClassName("myClass");
console.dir(myClass);

let par = document.getElementsByTagName('p');
console.dir(par);

// querySelector

let query = document.querySelector(".myClass");
console.dir(query);

let boxs = document.querySelectorAll('.box');
// boxs[0].innerText = 'This is not first div'
// boxs[1].innerText = 'This is not second div'
// boxs[2].innerText = 'This is not third div'
let i = 0;
for(box of boxs){
    box.innerText = 'enter the value of node div index ' +i;
    i++;
}