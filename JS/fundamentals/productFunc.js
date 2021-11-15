
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
var suggestedProducts = [
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

function displayProducts(title, elIdName, data){
    
    var pel = document.getElementById(elIdName);
    var output = "<h1>"+title+"</h1>";

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

displayProducts("Deals of the Day","deals", products);
displayProducts("Suggestions For you","suggestions", suggestedProducts);