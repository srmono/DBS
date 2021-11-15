import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyGift } from '../redux';


function HooksGiftContainer() {

    const numOfGifts = useSelector(state => state.gift.numOfGifts);
    const dispatch = useDispatch();

    return (
        <div>
            <h2> Hooks:  Number of Gifts - { numOfGifts }</h2>
            <button onClick={() => dispatch(buyGift())}> Buy Gift </button>
        </div>
    )
    
}

export default HooksGiftContainer
