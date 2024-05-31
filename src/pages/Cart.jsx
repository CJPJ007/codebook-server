import React from "react";
import { useCartContext } from "../helpers/Context/CartProvider";
import CartProduct from "../components/Cart/CartProduct";
import TotalAmount from "../components/Cart/TotalAmount";
import NoProductsInCart from "../components/Cart/NoProductsInCart";
import PlaceOrder from "../components/Cart/PlaceOrder";
import Heading from "../components/Layouts/Heading";

export default function Cart() {
  const [state] = useCartContext();

  return (
    <div className="flex items-center flex-col space-x-2">
      {state.cartProducts && state.cartProducts.length!==0 ? (
        <>
          <Heading headingName={`My Cart(${state.cartProducts.length})`}/>  
          <div className="space-y-6 w-2/3">
            {state.cartProducts.map((product) => {
              return <CartProduct cartProduct={product} />;
            })}
            <TotalAmount cartProducts={state.cartProducts} />
            <PlaceOrder />
          </div>
        </>
      ) : (
        <NoProductsInCart/>
      )}
    </div>
  );
}
