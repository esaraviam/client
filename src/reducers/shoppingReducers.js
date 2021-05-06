import { types } from '../types/types';

const initialState = {
  shoppingCart: [],
};

export const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add_product:
      if (
        !state.shoppingCart.find(
          (product) => product._id === action.product._id
        )
      ) {
        state.shoppingCart.push(action.product);
      }
      return state;
    case types.remove_product:
      state.shoppingCart = state.shoppingCart.filter(
        (product) => product._id !== action.product._id
      );
      return state;
    case types.increment_product:
      state.shoppingCart = state.shoppingCart.map((product) => {
        if (product._id === action.product._id) {
          product.quantity += 1;
        }
        return product;
      });
      return state;
    case types.decrement_product:
      state.shoppingCart = state.shoppingCart.map((product) => {
        if (product._id === action.product._id) {
          if (product.quantity > 1) product.quantity -= 1;
        }
        return product;
      });
      return state;

    default:
      return state;
  }
};
