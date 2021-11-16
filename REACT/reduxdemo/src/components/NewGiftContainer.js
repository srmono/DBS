import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyGift } from '../redux'

function NewGiftContainer({numOfGifts, buyGift}) {

    const [number, setNumber] = useState(1);

    return (
        <div>
            <input 
                type="text" 
                value={number} 
                onChange={ e => setNumber(e.target.value)}
            />
            <br/>
            <h2> Number of Gifts - { numOfGifts }</h2>
            <button onClick={() => buyGift(number)}> Buy {number} Gift </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfGifts: state.gift.numOfGifts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyGift: number => dispatch(buyGift(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGiftContainer)
