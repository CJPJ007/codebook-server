import React, { useEffect, useState } from "react";
import { useCartContext } from "../../helpers/Context/CartProvider";
import { Link } from "react-router-dom";

export default function Product({ productDetails }) {
  const [isPreCart, setIsPreCart] = useState(false);
  const [state, dispatch] = useCartContext();

  useEffect(() => {
    const currProductInCart = state.cartProducts.filter(
      (cartProduct) => cartProduct.id === productDetails.id
    );
    setIsPreCart(currProductInCart && currProductInCart.length !== 0);
  }, [productDetails, state.cartProducts]);

  const addToCart = (e) => {
    e.stopPropagation();
    dispatch({
      type: "ADD_TO_CART",
      payload: productDetails,
    });
  };

  const removeFromCart = (e) => {
    e.stopPropagation();
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productDetails.id,
    });
  };

  return (
    <div className="p-4 space-y-2 rounded-md shadow-md shadow-gray-300 hover:cursor-pointer hover:scale-105 transition-all ease-in-out">
      <Link to={`/products/${productDetails.id}`}>
        <img
          className="rounded-md aspect-video object-cover"
          src={productDetails.imageSource}
          alt={productDetails.name}
        />
      </Link>
      <h1 className="text-2xl font-bold">{productDetails.name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        suscipit totam adipisci placeat repellendus necessitatibus consequuntur
        sint possimus modi perspiciatis at dolorem, ab aut consequatur tenetur.
        Ratione minima perferendis similique.
      </p>
      <p className="text-yellow-500">
        {"★ ".repeat(parseInt(productDetails.rating))}
      </p>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">{productDetails.price} Rs/-</p>
        {!isPreCart ? (
          <button
            className="rounded-md bg-blue-500 p-2 text-white"
            onClick={addToCart}
          >
            Add to cart +
          </button>
        ) : (
          <button
            className="rounded-md bg-red-500 p-2 text-white"
            onClick={removeFromCart}
          >
            Remove From Cart <i class="bi bi-trash"></i>
          </button>
        )}
      </div>
    </div>
  );
}
