import React from 'react';
import { useDispatch } from 'react-redux';
import shoppingActions from '../actions/shoppingActions';
import { useHistory } from 'react-router-dom';

export const ProductItem = ({ product }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const HandleAddProduct = () => {
    dispatch(shoppingActions.addProduct(product));
    history.push('/shopping-cart');
  };
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-2 w-100 m-3 hover:bg-blue-50 hover:shadow-xl cursor-pointer">
      <img
        src={`http://${product.image}`}
        alt={product.description}
        className="rounded shadow transform hover:scale-105 mb-3"
      />
      <div className="grid grid-rows-3">
        <div className="mb-3 h-16">
          <span className="text-base font-bold">{product.brand} </span>
          <span className="text-sm">{product.description}</span>
        </div>

        <div className="text-xl font-bold ">
          ${product.price.toLocaleString('es-ES')}
        </div>
        <button
          onClick={HandleAddProduct}
          className="h-10 py-2 px-4 
          transform hover:scale-105 bg-white text-blue-500  
          text-center font-semibold rounded-xl shadow-md focus:outline-none"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
