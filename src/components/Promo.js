import React from 'react';
import { useDiscounts } from '../hooks/useDiscounts';
export const Promo = () => {
  const { isLoading, maxDiscount } = useDiscounts();

  return isLoading ? (
    <p>Cargando Promociones...</p>
  ) : (
    <div className="flex justify-center">
      <div className="text-base font-bold tracking-wide py-4 px-4 rounded-xl shadow bg-blue-100 border border-blue-200 w-100 my-3 ">
        Esta de suerte!, si hoy compra un minimo de $
        {maxDiscount.threshold.toLocaleString('es-CL')} en productos de{' '}
        {maxDiscount.brand} recibirá ${maxDiscount.max.toLocaleString('es-CL')}{' '}
        en el total de su compra
      </div>
    </div>
  );
};
