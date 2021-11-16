import axios from 'axios';
import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FILURE} from './userTypes';

export const fetchUserRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FILURE,
        payload: error 
    }
}

// Async Actions
// Helps us to make async api calls
// accepts dispatch argument 

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then( response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchUserFailure(errorMessage))
            })
    }
}
