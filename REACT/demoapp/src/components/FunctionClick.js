import React from 'react';


function FunctionClick() {

    function clickHandler(){
        console.log("this is an event")
    }

    return (
        <div>
            <button onClick={clickHandler}> Clcik me </button>
        </div>
    )
}

export default FunctionClick;
