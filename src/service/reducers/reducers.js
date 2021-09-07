import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const initialState = {
  cartData: [],
};
export default function cartItems(state = initialState ,action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cartData:[...state.cartData,action.data] };
      break;
    case REMOVE_FROM_CART:
      let cartProductId = action.data.id;
      return {...state ,cartData: state.cartData.filter( (id) => id.id !== cartProductId )};
    break;
    default:
      return state;
  }
}
