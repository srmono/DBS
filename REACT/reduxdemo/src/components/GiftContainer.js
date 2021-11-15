import React from 'react'
import { connect } from 'react-redux'
import { buyGift } from '../redux'

function GiftContainer(props) {
    return (
        <div>
            <h2> Number of Gifts - { props.numOfGifts }</h2>
            <button onClick={props.buyGift}> Buy Gift </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfGifts: state.numOfGifts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyGift: () => dispatch(buyGift())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftContainer)
