'use strict'

//Selector
let resultsDiv = document.querySelector("#results");
let getBtn = document.querySelector("#get");
let newDiv1 = document.createElement("div1"); //<div></div>  

//HTTP Requests - Request/Response
//Axios uses promises
//Need to handle success and failure

//GET - READ
let getRequest = () => {
    axios.get("https://reqres.in/api/users")
        .then((responce) => {
            displayResult(responce.data.data);
        })//success, promise fulfilled
        .catch((err) => {
            console.error(err);
        });//failure, promise failed
}


//POST - CREATE

//PUT/PATCH - UPDATE

//DELETE - DELETE

let displayResult = (data) => {
    for (let entry of data) {
        const p = document.createElement("p");
        const text = document.createTextNode(`${entry.first_name} ${entry.last_name} ${entry.email}`);
        const th = document.createElement("th");

        const img = document.createElement("img");
        img.setAttribute("src", entry.avatar);
        img.setAttribute("class", "avatars");

        p.appendChild(text);
        resultsDiv.appendChild(p);
        resultsDiv.appendChild(img);
    }
}
getBtn.addEventListener("click", getRequest);