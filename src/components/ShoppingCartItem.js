import React from 'react';
import { useDispatch } from 'react-redux';
import shoppingActions from '../actions/shoppingActions';

export const ShoppingCartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(shoppingActions.incrementProduct(product));
  };
  const handleDecrement = () => {
    dispatch(shoppingActions.decrementProduct(product));
  };

  const handleDeletion = () => {
    dispatch(shoppingActions.removeProduct(product));
  };

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={`http://${product.image}`} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{product.description}</span>
          <span className="text-red-500 text-xs">{product.brand}</span>

          <button
            onClick={handleDeletion}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Eliminar
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button onClick={handleDecrement} className="">
          -
        </button>
        <span className="mx-2 border text-center w-8">{product.quantity}</span>

        <button onClick={handleIncrement} className="">
          +
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${product.price.toLocaleString('es-CL')}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${(product.price * product.quantity).toLocaleString('es-CL')}
      </span>
    </div>
  );
};
