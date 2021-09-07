import { combineReducers } from "redux"
import cartItems from "./reducers"
import products from "./product"

export default combineReducers({
    cartItems,products
})