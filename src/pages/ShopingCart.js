import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { OrderSummary } from '../components/OrderSummary';
import { ShoppingCartItem } from '../components/ShoppingCartItem';

export const ShoppingCart = () => {
  const products_added = useSelector((state) => state.shopping.shoppingCart);

  const [productsSelected, setProductsSelected] = useState(products_added);

  useEffect(() => {
    setProductsSelected(products_added);
  }, [products_added]);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">
              {productsSelected.length} Items
            </h2>
          </div>

          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Producto
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Cantidad
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Precio
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Total
            </h3>
          </div>

          {productsSelected.map((product) => {
            return <ShoppingCartItem key={product._id} product={product} />;
          })}

          <Link
            to="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            Continue Shopping
          </Link>
        </div>

        <OrderSummary />
      </div>
    </div>
  );
};
