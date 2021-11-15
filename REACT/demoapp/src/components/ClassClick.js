import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("clicked from class")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class - Click me</button>
            </div>
        )
    }
}

export default ClassClick
