import { Api } from './Api';

const fetchAllProducts = async () => {
  try {
    let products = await Api.get('/products');

    return products.data.productsList;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { fetchAllProducts };
