import {ADD_TO_CART, FETCH_DATA_SUCCESS, REMOVE_FROM_CART} from "../constants"
import axios from "axios"
export const addToCart = (data) => {
    return {
        type:ADD_TO_CART,
        data,
    }
}

export const removeFromCart = (data) => {
    return {
        type:REMOVE_FROM_CART,
        data
    }
}

export const fetchProductSuccess = products => {
    return {
      type: FETCH_DATA_SUCCESS,
      data: products.data
    }
  }

export const fetchProduct = () => {
    return (dispatch) => {
        axios.get('https://fakestoreapi.com/products')
            .then(resp => {
                dispatch(fetchProductSuccess(resp))
            })
            .catch(error =>{
                console.log(error)
            })
    }
}