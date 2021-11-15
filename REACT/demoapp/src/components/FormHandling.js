import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             comment: "",
             topic: 'react'
        }
    }

    handleUserName = (event) => {

        this.setState({
            username: event.target.value

        })
    }

    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(`${this.state.username} - ${this.state.comment} - ${this.state.topic}`)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label> Username </label>
                        <input 
                            onChange={this.handleUserName} 
                            type="text" 
                            value={this.state.username} 
                        />
                    </div>
                    <div>
                        <label> Comment</label>
                        <textarea 
                            value={this.state.comment}
                            onChange={this.handleComment}
                        > </textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select 
                            value={this.state.topic}
                            onChange={this.handleTopic}
                        >
                            <option value="React"> React </option>
                            <option value="Angular"> Angular </option>
                            <option value="vue"> Vue </option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <h3>{this.state.username}</h3>
            </div>
        )
    }
}

export default FormHandling
