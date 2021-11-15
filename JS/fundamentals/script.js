// var 8name ;  var should not start with number
// JS is a case-sensitive language
var name8;

// Primitive Data Types
var name = "Venkat"; //String
var esVersion = 6; // Number
var isUserLogedIn = true; // boolean  true/false
var data = null; // null is a special data type
// undefined

//alert(name8);
console.log("Name is: " + name);

//complex data types 
// Array 
var arr = new Array();
var tools = ["JS", "html", "css", 7, [], null, true, {}];

tools[0];

// Object 

var person = {
    name: "venkat", // string, number, bool, array, obj..
    tools: ["frontend","banckend","db","cloud","arc.."],
    exp: 17,
    address: {
        city: "bangalore",
        geo: {
            lat: 0980809,
            lan: -909892
        }
    },
    teach: function(){
        console.log(" He teach......")
    }
}

person.name = "new value"

function fname(){
    // statements
}




var name = "person";
name = "new name"