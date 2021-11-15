import {BUY_GIFT} from './giftTypes'

const initialState = {
    numOfGifts: 10
}

const giftReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_GIFT: return {
            ...state,
            numOfGifts: state.numOfGifts - 1
        }
        default: return state
    }
}

export default giftReducer;