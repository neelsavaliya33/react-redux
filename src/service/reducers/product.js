import {
    FETCH_DATA_SUCCESS
  } from "../constants";
  const initialState = {
    product: [],
  };
export default function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {...state, product: action.data } ;
      break;
    default:
      return state;
  }
}