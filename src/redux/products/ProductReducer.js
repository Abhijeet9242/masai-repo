// import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./actionType"
import * as types from "./actionType"

const initialState = {
    loading: false,
    products: [],
    error: []

}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT_REQUEST:
            return {
                ...state, loading: true
            }
        case types.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                
            }
        case types.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

            default: return state

    }
}

export default productsReducer