import { types } from '../types/types';

const addProduct = (product) => {
  product.quantity = 1;
  return {
    type: types.add_product,
    product,
  };
};
const removeProduct = (product) => {
  return {
    type: types.remove_product,
    product,
  };
};

const incrementProduct = (product) => {
  return {
    type: types.increment_product,
    product,
  };
};

const decrementProduct = (product) => {
  return {
    type: types.decrement_product,
    product,
  };
};

const shoppingActions = {
  addProduct,
  removeProduct,
  incrementProduct,
  decrementProduct,
};
export default shoppingActions;
