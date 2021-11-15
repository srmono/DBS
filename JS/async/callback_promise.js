// 1. You  login to DBS portal : email & pw : fn -> username
// 2. username -> projects by user name : fn -> projects
// 3. project details : fn -> proj details

function userLogin(email,pw){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("user login is success")
            resolve({username: email})
        }, 5000)
    })
}

function getProjects(uname){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("Projects Return by User name")
            resolve(["proj1","proj2","proj3"])
        }, 5000)
    })
}

function projDetails(proj){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Here is the project details")
        }, 5000)
    })
}


// userLogin("bvsrao91@gmail.com", "79837")
//     .then( user => getProjects(user) )
//     .then( projects => projDetails(projects[0]))
//     .then( details => console.log(details))
//     .catch( err => console.log(err));
// //    .finally( () => {})

// async await;

async function displayUser(){
    try {
        let loggedinUser = await userLogin("bvsrao91@gmail.com", "79837");
        let projects = await getProjects(loggedinUser);
        let details = await projDetails(projects[0]);
        console.log(details);
    } catch (error) {
        console.log(error.message)
    }
}

displayUser()

