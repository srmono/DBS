import { combineReducers } from "redux";
import giftReducer from "./gifts/giftReducer";
import greetReducer from "./greetingcard/greetCartReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    gift: giftReducer,
    greet: greetReducer,
    user: userReducer
})

export default rootReducer