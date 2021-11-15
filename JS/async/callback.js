// 1. You  login to DBS portal : email & pw : fn -> username
// 2. username -> projects by user name : fn -> projects
// 3. project details : fn -> proj details

function userLogin(email,pw, callback){
    setTimeout( () => {
        console.log("user login is success")
        callback({username: email})
    }, 5000)
}

function getProjects(uname, callback){
    setTimeout(() => {
        console.log("Projects Return by User name")
        callback(["proj1","proj2","proj3"])
    }, 5000)
}

function projDetails(proj, callback){
    setTimeout(() => {
        console.log("Here is the project details")
    }, 5000)
}

const user = userLogin("bvsrao91@gmail.com", "122333", (user) => {
    console.log(user);
    getProjects(user, (projects) => {
        console.log(projects);
        var proj = projects[0];
        projDetails(proj, (details) => {
            console.log(details)
        })
    })
});