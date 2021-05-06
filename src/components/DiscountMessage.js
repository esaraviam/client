import React from 'react';

export const DiscountMessage = ({
  possibleDiscounts,
  discountApplied,
  setdiscountApplied,
}) => {
  return (
    <div className="mx-auto">
      {possibleDiscounts.map((psdiscounts) => {
        if (psdiscounts.d) {
          if (psdiscounts.d.discount > 0) {
            if (psdiscounts.brand_client_amount < psdiscounts.d.threshold) {
              return (
                <div className="text-sm text-center" key={psdiscounts._id}>
                  {psdiscounts.d.brand} - usted ha comprado{' '}
                  {psdiscounts.brand_client_amount} y debe comprar{' '}
                  {psdiscounts.d.threshold} para obtener un descuento de
                  {psdiscounts.d.discount}
                </div>
              );
            } else {
              if (discountApplied < psdiscounts.d.discount) {
                setdiscountApplied(psdiscounts.d.discount);
              }

              return (
                <div className="font-semibold text-sm" key={psdiscounts._id}>
                  {psdiscounts.d.brand} - usted ha comprado{' '}
                  {psdiscounts.brand_client_amount} y ha obtenido un descuento
                  de ${psdiscounts.d.discount.toLocaleString('es-CL')}
                </div>
              );
            }
          } else {
            return <span key={Math.random()}></span>;
          }
        } else {
          return <span key={Math.random()}></span>;
        }
      })}
    </div>
  );
};
