// while 
// do while 
// for 

// for in 
var product = {
    name: "mobile",
    brand: "Vivo",
    price: 30000
}


// for( x in product){
//     console.log(x + " : " + product[x])
// }

// for of

var tools = ["html", "css", "js"];

// var toolLength = tools.length;

// console.time("forloop");
// for(var i =0; i < toolLength; i++){
//     console.log(tools[i])
// }
// console.timeEnd("forloop");

// for( tool of  tools){
//     console.log(tool)
// }

for( tool in  tools){
    console.log(tools[tool])
}

