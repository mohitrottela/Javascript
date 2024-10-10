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

let boxs = document.querySelector('.box');
// boxs[0].innerText = 'This is not first div'
// boxs[1].innerText = 'This is not second div'
// boxs[2].innerText = 'This is not third div'
// let i = 0;
// for(box of boxs){
//     box.innerText = 'enter the value of node div index ' +i;
//     i++;
// }

let newBtn = document.createElement('button');
newBtn.innerText = "click me";

// boxs.append(newBtn);
// boxs.prepend(newBtn);

//Attributes
// let divAttri = document.querySelector('div');
// let setAttribute = divAttri.setAttribute('class','newClass');
// let valueOfAttribute = divAttri.getAttribute('class');
// console.log(valueOfAttribute)


//question
let newButton = document.createElement('button');
newButton.innerText = "click me !";
newButton.style.backgroundColor = 'red';
newButton.style.color = 'white';
document.querySelector('body').prepend(newButton);


// question 2
let para = document.querySelector('.para');
para.classList.add('newPara');
