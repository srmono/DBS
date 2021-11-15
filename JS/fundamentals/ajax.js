var url = "https://jsonplaceholder.typicode.com/users";

//not initiated
var http = new XMLHttpRequest();


//check and recevie response
http.onreadystatechange = function(){
    console.log( "inside on ready state change: " + this.readyState)
    if(this.readyState == 4 && this.status == 200){
        console.log(this.readyState)
        //console.log(this.responseText)
        //parse as an object
        var data = JSON.parse(this.responseText);

        for(x of data){
            console.log(x)
        }
    }
}

//init/config
http.open("GET", "./products.json" , true);
//http.open("GET", url, true);

//send requequest 
http.send();

