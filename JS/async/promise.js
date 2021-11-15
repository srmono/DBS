const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //console.log("user Name available");
        //resolve({user: "venkat"});
        reject(new Error("No User Found"))
    }, 5000)
} );

promise
    .then( (user) => console.log(user))
    .catch( err => console.log(err))
