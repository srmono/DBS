import React, { Component } from 'react'

class RenderCondition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {

        // Short circuit operator
        return this.state.isLoggedIn && <h1> Welcome Venkat</h1>

        // // Ternary operator
        // return this.state.isLoggedIn ? (
        //     <h1> Welcome Venkat</h1>
        // ) : (
        //     <h1> Welcome Guest</h1>
        // )

        // variable Approach
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <h1> Welcome User Name</h1>
        // } else {
        //     message = <h1> Welcome Guest</h1>
        // }
        
        // return <div> {message} </div>

        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <h1> Welcome User Name</h1>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h1> Welcome Guest</h1>
        //         </div>
        //     )
        // }
        // if(this.state.isLoggedIn){
        //     return <h1> Welcome User Name</h1>
        // } else {
        //     return <h1> Welcome Guest</h1>
        // }
        
    }
}

export default RenderCondition
