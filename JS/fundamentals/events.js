// function callme(){
//     console.log("I am an event");
//     // remove events
// }

// var btn = document.getElementById("btn");
// // btn.onclick = callme;

// // Best way to attach event
// btn.addEventListener('click', callme);


/// Phases

var p1 = document.getElementById("parent");
var c1 = document.getElementById("child");

// using event object
function one(){
    //console.log(e.target);
    //console.log(e.currentTarget);
    //e.stopPropagation();
    console.log("its a parent")
}

function two(e){
    e.stopPropagation();
    console.log("its a child")
}

function three(e){
    if(false){
        e.stopImmediatePropagation();
    }
    console.log("message 3")
}
function four(){
    console.log("message 4")
}
// by default bottom to top - Bubbling phase
p1.addEventListener('click', one);
p1.addEventListener('click', three);
p1.addEventListener('click', four);

//c1.addEventListener('click', two);

var anc =  document.getElementById('anc');

function anchor(e){
    e.preventDefault();
    console.log("this is prevent default function")
}

anc.addEventListener('click', anchor)