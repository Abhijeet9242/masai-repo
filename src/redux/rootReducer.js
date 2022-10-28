import {combineReducers} from "redux";
// import cakeReducer from "./cake/cakeReducer";
// import iceCreamReducer from "./iceCream/iceCreamReducer";
import productsReducer from "./products/ProductReducer";

const rootReducer = combineReducers({
    data:productsReducer,
   
})

export default rootReducer