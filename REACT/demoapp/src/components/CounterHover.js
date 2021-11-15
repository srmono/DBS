import React, { Component } from 'react'
import updatedComponent from './withCounter';

class CounterHover extends Component {
    
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h1> Count is : {count } </h1>
                <button onMouseOver={incrementCount}>hover me</button>
            </div>
        )
    }
}

export default updatedComponent(CounterHover)
