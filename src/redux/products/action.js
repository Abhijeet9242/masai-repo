import * as types from "./actionType";
import axios from "axios";
// import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./actionType";






export const fetchProductRequest = () => {
    return {
        type:types.FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = (products) => {
    return {
       type: types.FETCH_PRODUCT_SUCCESS,
        payload: products
    }
}

export const fetchProductFailure = (error) => {
    return {
        type: types.FETCH_PRODUCT_FAILURE,
        payload: error
    }
}


//here we fetch api for this we install redux-thunk middleware
export function fetchProducts() {
    return function (dispatch){
        dispatch(fetchProductRequest())
        axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
        .then((response) => {
            const products = response.data.data
            console.log(products)
            dispatch(fetchProductSuccess(products))
        })
        .catch((error) => {
            // const errormsg = error.message
            dispatch(fetchProductFailure(error.message))
        })
    }
}