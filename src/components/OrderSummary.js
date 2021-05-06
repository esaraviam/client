import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDiscounts } from '../hooks/useDiscounts';
import { DiscountMessage } from './DiscountMessage';

export const OrderSummary = () => {
  const { discounts } = useDiscounts();
  const products_added = useSelector((state) => state.shopping.shoppingCart);
  const [subTotal, setSubTotal] = useState(0);
  const [discountApplied, setdiscountApplied] = useState(0);
  const [possibleDiscounts, setPossibleDiscounts] = useState([]);

  useEffect(() => {
    const productsAddedMap = new Map();
    let brand_selected = [];
    products_added.forEach((product) => {
      if (productsAddedMap.has(product.brand)) {
        let current = productsAddedMap.get(product.brand);

        current += product.price * product.quantity;
        productsAddedMap.set(product.brand, current.price);
      } else {
        brand_selected.push(product.brand);
        productsAddedMap.set(product.brand, product.price * product.quantity);
      }
    });

    let subTotal = 0;

    let brandDiscounts = brand_selected.map((brand) => {
      let brand_client_amount = productsAddedMap.get(brand);
      let d = discounts.find((discount) => discount.brand === brand);

      return { brand_client_amount, d };
    });
    setPossibleDiscounts(brandDiscounts);

    productsAddedMap.forEach((item, k) => {
      subTotal += item;
    });

    setSubTotal(subTotal);
  }, [products_added, discounts]);

  // console.log(possibleDiscounts);

  return (
    <div id="summary" className="w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Su orden</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Total Items {products_added.length}
        </span>
        <span className="font-semibold text-sm">
          ${subTotal.toLocaleString('es-CL')}
        </span>
      </div>
      <div className="py-10">
        <DiscountMessage
          possibleDiscounts={possibleDiscounts}
          discountApplied={discountApplied}
          setdiscountApplied={setdiscountApplied}
        />
      </div>

      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Sub-total</span>
          <span>${subTotal.toLocaleString('es-CL')}</span>
        </div>
        <div className="flex font-semibold justify-between py-6 text-sm ">
          <span>Descuentos</span>
          <span>
            ${discountApplied > 0 ? discountApplied.toLocaleString('es-CL') : 0}
          </span>
        </div>
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total con descuentos:</span>
          <span>
            $
            {(
              subTotal - (discountApplied > 0 ? discountApplied : 0)
            ).toLocaleString('es-CL')}
          </span>
        </div>
        <button className="bg-indigo-500 rounded-full font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Ir a pagar
        </button>
      </div>
    </div>
  );
};
