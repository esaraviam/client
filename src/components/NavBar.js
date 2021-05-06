import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="bg-blue-500 h-16 w-100 flex items-center px-5 text-gray-50 shadow-xl rounded-b-lg">
      <span className="flex-none w-24">
        <Link to="/">
          <img
            src="https://www.lider.cl/catalogo/images/lider-logo.svg"
            className="h-24"
            alt="Desafio wallmart"
          />
        </Link>
      </span>
      <span className="flex-grow px-5 "></span>
      <span className="flex-none">
        <div className="">
          <Link to="/shopping-cart">
            <ShoppingCartIcon className="h-8 w-8" />
          </Link>
        </div>
      </span>
    </nav>
  );
};
