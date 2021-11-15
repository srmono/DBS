// Create a function
function fname(){
    console.log("I am a function")
}

// call the function
//fname();

// call function without "()": It returns itself

var x = fname;
//x();

// passing params and return
// pass additional params it will ignore
// pass less number of params it will retun NaN (2 + undefined)
function calc(a, b){
    return a + b;
}

// shopping cart total
// arguments built in array
function cartTotal(){
    //console.log(arguments)
    var total = 0;
    for(item of arguments){
        total += item;
    }

    return total;
}

//function hoisting 

//test();
// function test(){
//     console.log("this is test function");
// }
// // literalFunc() : Uncaught TypeError: literalFunc is not a function
// var literalFunc = function(){
//     console.log("this is a literal function")
// }

//literalFunc()

// self invoking functions
(function(){
    console.log("I am a self invoking funciton");
})()

// Scope
var x =10;

function parent(){
    var y = 20;
    function child(){

    }
}





