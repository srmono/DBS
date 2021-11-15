import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "React JS"
        }
        console.log("LifeCycleB Inside constructor")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB inside getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB in componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleB in shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB in getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleB in componentDidUpdate")
    }

    render() {
        console.log("LifeCycleB in side render")
        return (
            <div>
                
                LifeCycleB Component
            </div>
        )
    }
}

export default LifeCycleB
