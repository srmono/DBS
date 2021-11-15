var products = [
    {
        imageUrl: "dress.jpeg",
        brand: "Aurella",
        offer: "40 to 50% discount",
        title: "dresses"
    },
    {
        imageUrl: "haldi.jpg",
        brand: "grocery",
        offer: "30 to 70% discount",
        title: "grocery products"
    },
    {
        imageUrl: "family.jpg",
        brand: "events",
        offer: "30 to 70% discount",
        title: "events info"
    },
    {
        imageUrl: "dress.jpeg",
        brand: "Aurella",
        offer: "40 to 50% discount",
        title: "dresses"
    },
    {
        imageUrl: "haldi.jpg",
        brand: "grocery",
        offer: "30 to 70% discount",
        title: "grocery products"
    },
    {
        imageUrl: "family.jpg",
        brand: "events",
        offer: "30 to 70% discount",
        title: "events info"
    }
];

// read the element
var pel = document.getElementById("deals");
var output = "";

for(product of products){
    //console.log(product.brand)

    output += '<div class="product"> '+
                    ' <img src="'+ product.imageUrl +'" width="145px" height="auto">' +
                    ' <h3>'+ product.title +'</h3>' +
                    ' <span>'+ product.offer+'</span>' +
                    ' <div>'+ product.brand +'</div> ' +
                ' </div>';
}

//console.log(output);
pel.innerHTML = output;

