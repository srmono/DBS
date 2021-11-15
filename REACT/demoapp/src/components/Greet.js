import React, {Fragment} from "react";

function Greet({name,children}){
    return (
        <Fragment>
            <h1> Frontend tool : {name} </h1>
            <p> Second element </p>
        </Fragment>
    )
}

//export const Greet = () => <h1> I am an arrow Functional Component</h1>;

export default Greet;