import React from "react";
import { useCartContext } from "../helpers/Context/CartProvider";
import { Link } from "react-router-dom";
import UserActionsLoggedIn from "./UserActionsLoggedIn";
import UserActionsLoggedOut from "./UserActionsLoggedOut";

export default function SideNav() {
  const [state, dispatch] = useCartContext();
  const loggedIn =
    localStorage.getItem("user") && localStorage.getItem("user").length !== 0
      ? true
      : false;

  const toggleSearch = () => {
    console.log("Inside toggleSearch");
    dispatch({
      type: "SHOW_SEARCH_BAR",
    });
  };

  const toggleUserAction = () => {
    console.log("Inside toggleUserAction");
    dispatch({
      type: "SHOW_USER_ACTIONS",
    });
  };
  return (
    <div>
      <ul className="flex space-x-6 px-4 text-xl">
        <li className="hover:cursor-pointer">
          <i className="bi bi-gear-wide-connected"></i>
        </li>
        <li className="hover:cursor-pointer" onClick={toggleSearch}>
          <i className="bi bi-search"></i>
        </li>
        <li className="hover:cursor-pointer">
          <Link to={"cart"}>
            <span className="bi bi-cart relative">
              <span className="absolute -top-1 left-2.5 bg-rose-500 text-white rounded-full px-1 text-sm">
                {state.cartProducts.length}
              </span>
            </span>
          </Link>
        </li>
        <li className="hover:cursor-pointer" onClick={toggleUserAction}>
          <i className="bi bi-person-circle"></i>
        </li>
      </ul>
      {loggedIn ? <UserActionsLoggedIn /> : <UserActionsLoggedOut />}
    </div>
  );
}
