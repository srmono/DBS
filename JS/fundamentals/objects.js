// singleton pattern

// var person = {
//     name: "venkat",
//     prof: "Training & Development"
// }

// person.city = "bangalore";
// person.teching = function(){}


//var p1 = Object.create(person);

// Constructor pattern

function Laptop(ram, cores, disctype){
    this.ram = ram;
    this.cores = cores;
    this.disctype = disctype;
    this.getInfo = function(){
        return this.ram + " - " + this.cores + " - " + this.disctype;
    }
}

Laptop.prototype.os = "DOS";

var system1 = new Laptop("16gb", "16cores", "SSD");
var system2 = new Laptop("8gb", "6cores", "HDD");


//{n} instances..
// system1.brand = "Lenovo";

var tools = ['html', 'css'];
tools.length;

// var num = 10;
var str = "java script";

String.prototype.myOwnMethod = function(){
    return this.toUpperCase();
}

//https://www.w3schools.com/jsref/ jsref_obj_string.asp