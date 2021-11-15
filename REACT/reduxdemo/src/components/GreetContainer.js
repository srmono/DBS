import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyGreetingCard } from '../redux';


function GreetContainer() {

    const numOfGreetingCards = useSelector(state => state.greet.numOfGreetingCards);
    const dispatch = useDispatch();

    return (
        <div>
            <h2> Hooks:  Number of Greeting Cards - { numOfGreetingCards }</h2>
            <button onClick={() => dispatch(buyGreetingCard())}> Buy Greeting Card </button>
        </div>
    )
    
}

export default GreetContainer
