import React, { Component } from 'react'

class Message extends Component {

    constructor(props) { // rconst
        super(props)
    
        this.state = {
             message: "Welcome to React"
        }
    }
    
    changeMessage() {
        //this.state.message = "new message"
        this.setState({
            message: "Succesfully update message"
        })
    }
    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={ () => this.changeMessage() }> Change Message </button>
            </div>
        )
    }
}

export default Message;
