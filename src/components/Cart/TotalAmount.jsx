import React, { useEffect, useState } from "react";

export default function TotalAmount({ cartProducts }) {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    cartProducts.forEach((cartProduct) => {
      totalPrice += cartProduct.price;
    });
    setTotalAmount(totalPrice);
  }, [cartProducts]);

  return (
    <>
      {cartProducts && cartProducts.length!==0 ? (
        <>
        <div className="flex justify-between">
          <p className="text-xl font-bold">Total Amount</p>
          <p className="text-xl font-bold">{totalAmount} Rs/-</p>
        </div>
        <hr />
        </>
      ) : (
        ""
      )}
    </>
  );
}
