import {BUY_GIFT} from './giftTypes'

//Action Create
export const buyGift = (number = 1) => {
    return {
        type: BUY_GIFT,
        payload: number
    }
}
