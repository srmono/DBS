import { FETCH_PRODUCTS_FILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./userTypes"

const initialState = {
	loading: false, //loading spinner
	users: [],	//list of products
	error: ""	//display err of products
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_FILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer;