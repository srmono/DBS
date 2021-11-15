import React, { Component, PureComponent } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "React JS"
        }
        console.log("LifeCycleA Inside constructor")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA inside getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA in componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA in shouldComponentUpdate");
        return true;
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA in getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleA in componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "React JS"
        })
    }
    render() {
        console.log("LifeCycleA in side render")
        return (
            <div>
                <LifeCycleB/>
                <h1> {this.state.name} </h1>
                <button onClick={this.changeState}> Update State</button>
            </div>
        )
    }
}

export default LifeCycleA
