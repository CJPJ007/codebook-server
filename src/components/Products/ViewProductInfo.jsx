import React, { useEffect, useState } from "react";
import { useCartContext } from "../../helpers/Context/CartProvider";
import { useParams } from "react-router-dom";
import { useGetProductDetails } from "../../services/ProductService";

export default function ViewProductInfo() {
  const [isPreCart, setIsPreCart] = useState(false);
  const [state, dispatch] = useCartContext();
  const { id } = useParams();
  const productDetails = useGetProductDetails(id);

  useEffect(() => {
    const currProductInCart = state.cartProducts.filter(
      (cartProduct) => cartProduct.id === productDetails.id
    );
    setIsPreCart(currProductInCart && currProductInCart.length !== 0);
  }, [productDetails, state.cartProducts]);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: productDetails,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productDetails.id,
    });
  };

  return (
    <div className=" flex flex-col items-center p-6">
      <div className=" flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-bold">{productDetails.name}</h1>
        <p>{productDetails.summary}</p>
        <div className="w-full grid grid-cols-2 gap-8">
          <img
            src={productDetails.imageSource}
            className="rounded-md h-96 aspect-video object-cover"
            alt=""
          />
          <div className="space-y-6">
            <p className="text-2xl font-bold">{productDetails.price} Rs/-</p>
            <p className="text-yellow-500">
              {"★ ".repeat(parseInt(productDetails.rating))}
            </p>
            <div className="flex space-x-3">
            {
                productDetails.inStock?
                <p className="py-1 px-2 text-green-500 bg-gray-200/90 rounded-md">In Stock</p>:
                <p className="py-1 px-2 text-red-500 bg-gray-200 rounded-md">Out Of Stock</p>
            }
            <p className="py-1 px-2 text-blue-500 bg-gray-200 rounded-md">Sold : {productDetails.purchased}</p>
            </div>
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
        <p>{productDetails.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
