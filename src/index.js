import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./helpers/Context/CartProvider";
import { ProductFilterProvider } from "./helpers/Context/ProductFilterProvider";
import { prodFilInitialState, productFilterReducer } from "./helpers/Reducers/productFilterReducer";
import { cartInitialState, cartReducer } from "./helpers/Reducers/cartReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider initialState={cartInitialState} reducer={cartReducer}>
      <ProductFilterProvider initialState={prodFilInitialState}reducer={productFilterReducer}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductFilterProvider>
    </CartProvider>
  </React.StrictMode>
);
