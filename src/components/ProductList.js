import React, { useEffect, useState } from 'react';

import { useProducts } from '../hooks/useProducts';
import { ProductItem } from './ProductItem';
import { Promo } from './Promo';

export const ProductList = () => {
  const { isLoading, products } = useProducts();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const filteredProducts = () => {
      if (search === '') {
        return products;
      } else {
        return products.filter((product) =>
          product.description.includes(search)
        );
      }
    };
    setFilter(filteredProducts);
  }, [search, products]);

  const hangleSearch = ({ target }) => setSearch(target.value);

  return (
    <div className="px-4 py-2 mt-5 w-100 min-h-screen">
      <Promo />
      <div className="py-3 mt-3">
        <input
          type="text"
          onChange={hangleSearch}
          placeholder="Qué producto anda buscando?"
          className="h-10 mx w-full text-blue-400 px-3 border border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 ">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          filter &&
          filter.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};
