import { Api } from './Api';

const fetchAllDiscounts = async () => {
  try {
    let discountList = await Api.get('/discounts ');

    return discountList.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { fetchAllDiscounts };
