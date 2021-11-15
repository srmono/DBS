import React, { Component } from 'react';
import updatedComponent from './withCounter';

export class CounterClick extends Component {
    
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h1> Count is : {count } </h1>
                <button onClick={incrementCount}>click me</button>
            </div>
        )
    }
}

export default updatedComponent(CounterClick)
