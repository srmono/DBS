function commonAjax(url, method, callback){
    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            callback(this.responseText);
        }
    }
    http.open(method, url, true);
    http.send();
}

function displayProducts(rawdata){

    var data = JSON.parse(rawdata);

    var pel = document.getElementById("deals");
    var output = "<h1>Deal of the Data</h1>";

    for(product of data){
        output += '<div class="product"> '+
                        ' <img src="'+ product.imageUrl +'" width="145px" height="auto">' +
                        ' <h3>'+ product.title +'</h3>' +
                        ' <span>'+ product.offer+'</span>' +
                        ' <div>'+ product.brand +'</div> ' +
                    ' </div>';
    }

    pel.innerHTML = output;
}

commonAjax("products.json", "GET", displayProducts)