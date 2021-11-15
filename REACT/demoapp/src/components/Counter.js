import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment(){
        //this.state.count = this.state.count + 1;
        // this.setState(
        //     { count: this.state.count + 1},
        //     () => console.log('call back value', this.state.count)
        // )

        //console.log(this.state.count)
        // prevstate

        this.setState( (prevState) => ({
            count: prevState.count + 1
        }) )
    }

    fivetimes(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1> Counter - {this.state.count}</h1>
                <button onClick={ () => this.increment() }>Increment </button>
                <button onClick={ () => this.fivetimes() }>Increment Five </button>
            </div>
        )
    }
}

export default Counter
