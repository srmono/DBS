// var name = "venkat"; // global scope
// let Name = "js"; // block scope

// const tool = "Java Script";// constant

// const tools = ["html", "css", "js"];

// Arrow Functions

let getName = () => "this is a funciton"
let calc = (a,b) => a+b
let add = n => n + 10;

//this keyword behaviour
//getName()

// Arguments default values

// function sum( a, b = 5 ){
//     return a + b
// }

//////////// Object Behaviour

// var name = "Venkat";
// var prof = "Trainig & Dev";

// var person = {
//     name,
//     prof,
//     "get Info"(){ //person["get Info"]()
//         console.log("here is the info")
//     }
// }

// spread and rest operator

var numbers = [2,3,4,5,5]

function total(...num){
    var total = 0;

    for( n of num){
        total += n;
    }
    return total;
}
///////////// Template literals

var name = "Venkat";
var prof = "Trainig & Dev";

var info = `Person name is ${name} and his profession is ${prof}`;







