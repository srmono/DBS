// document object: Properties and methods
// Create Variable
var el = document.createElement("div");

// Add div to html body appendchild/ append
document.body.appendChild(el);

// Create Text node
var txt = document.createTextNode("I am a div, Dynamically added");

//add text to div
el.appendChild(txt);

// Add attribute
el.setAttribute("id","test");

//read element
var proEl = document.getElementById("products");


// Document Properties
console.log(proEl.innerHTML);

var name = "Laptop"

//proEl.innerText = "new products";
proEl.innerHTML = "<p> new product is : " + name  +" </p>";

//proEl.remove()


