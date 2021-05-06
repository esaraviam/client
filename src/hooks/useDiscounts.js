import { useState, useEffect } from 'react';
import { fetchAllDiscounts } from '../api/discounts';
export const useDiscounts = () => {
  const [discounts, setDiscounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [maxDiscount, setMaxDiscount] = useState({ max: 0 });

  useEffect(() => {
    fetchAllDiscounts()
      .then((discountsList) => {
        setDiscounts(discountsList);
        setMaxDiscount(
          discountsList.reduce(
            (current, item) => {
              if (item.discount > current.max) {
                return { ...item, max: item.discount };
              }
              return current;
            },
            { max: 0 }
          )
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setDiscounts([]);

        setMaxDiscount({ max: 0 });
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    discounts,
    maxDiscount,
  };
};
