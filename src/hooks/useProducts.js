import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../api/products';
export const useProducts = (apiEndpoint) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllProducts()
      .then((productList) => {
        setProducts(productList);
        setIsLoading(false);
      })
      .catch((error) => {
        setProducts([]);
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    products,
  };
};
