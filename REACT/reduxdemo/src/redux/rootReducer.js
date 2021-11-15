import { combineReducers } from "redux";
import giftReducer from "./gifts/giftReducer";
import greetReducer from "./greetingcard/greetCartReducer";

const rootReducer = combineReducers({
    gift: giftReducer,
    greet: greetReducer
})

export default rootReducer