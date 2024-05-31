import React from "react";
import { useCartContext } from "../helpers/Context/CartProvider";
import { Link } from "react-router-dom";

export default function UserActionsLoggedOut() {
  const [state,dispatch] = useCartContext();

  const closeUserActions = ()=>{
    dispatch({
      type:"SHOW_USER_ACTIONS"
    });
  }
  return (
    <div
      className={`${
        state.toggleUserActions
          ? "absolute top-18 border-[1px] right-6 md:w-[14%] w-1/3 bg-white rounded-md border-black/10 shadow-md shadow-gray-200/95"
          : "hidden"
      }`}
    >
      <ul className="md:text-sm text-xs my-2">
        <Link to={"products"}  onClick={closeUserActions}>
          <li className="hover:bg-gray-200 hover:cursor-pointer p-2">
            All eBooks
          </li>
        </Link>
        <Link to={"login"}  onClick={closeUserActions}>
          <li className="hover:bg-gray-200 hover:cursor-pointer p-2">Login</li>
        </Link>
        <Link to={"register"}  onClick={closeUserActions}>
          <li className="hover:bg-gray-200 hover:cursor-pointer p-2">
            Register
          </li>
        </Link>
      </ul>
    </div>
  );
}
