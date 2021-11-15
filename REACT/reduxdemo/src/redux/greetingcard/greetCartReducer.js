import { BUY_GREETING_CARDS } from "./greetCardTypes";

const initialState = {
    numOfGreetingCards: 20
}

const greetReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_GREETING_CARDS: return {
            ...state,
            numOfGreetingCards: state.numOfGreetingCards - 1
        }
        default: return state
    }
}

export default greetReducer;