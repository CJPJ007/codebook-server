import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ViewProductInfo from "./components/Products/ViewProductInfo";
import OrderSummary from "./pages/OrderSummary";
import ProtectedRoute from "./components/ProtectedRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ViewProductInfo />} />
      <Route
        path="/order-summary"
        element={
          <ProtectedRoute>
            <OrderSummary />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
