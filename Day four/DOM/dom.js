'use strict'

//Selectors
let mainDiv = document.querySelector("#addToMe");
let addBtn = document.querySelector("#addBtn");
let text = "KMS"; 
let newDiv1 = document.createElement("div1"); //<div></div>   
//Functionality
let addToPage = () => {
    newDiv1.innerHTML = "";
    
    let newHeading = document.createElement("h1"); // <h1></h1>
    let newText = document.createTextNode(text); //loose text

    newHeading.appendChild(newText);//<h1>KMS</h1>  
    newDiv1.appendChild(newHeading); //<div><h1>KMS</h1></div>
    mainDiv.appendChild(newDiv1);// <div id="addToME"<div><h1>KMS</h1></div></div>

}


let add = document.querySelector("#add");
let addBtn2 = document.querySelector("#addBtn2");
let counter = 0;
let newDiv2 = document.createElement("div2"); //<div></div>
let math = () => {
    newDiv2.innerHTML = "";
    counter++;
    
    let newHeading = document.createElement("h1"); // <h1></h1>
    let newText = document.createTextNode(counter); //loose text

    newHeading.appendChild(newText); //<h1>KMS</h1>
    newDiv2.appendChild(newHeading); //<div><h1>KMS</h1></div>
    add.appendChild(newDiv2);// <div id="addToME"<div><h1>KMS</h1></div></div>

}

let addtot = document.querySelector("#addtot");
let addBtntot = document.querySelector("#addBtntot");
let newDiv3 = document.createElement("div3"); //<div></div>
let mathtot = () => {
    newDiv3.innerHTML = "";

    let newHeading = document.createElement("h1"); // <h1></h1>
    let newText = document.createTextNode(counter); //loose text

    newHeading.appendChild(newText); //<h1>KMS</h1>
    newDiv3.appendChild(newHeading); //<div><h1>KMS</h1></div>
    addtot.appendChild(newDiv3);// <div id="addToME"<div><h1>KMS</h1></div></div>

}
//Event listeners
addBtn.addEventListener("click", addToPage); //
addBtn2.addEventListener("click", math); //
addBtntot.addEventListener("click", mathtot); //