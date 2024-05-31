import React, { useEffect, useState } from "react";
import { useCartContext } from "../helpers/Context/CartProvider";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../services/UserService";

export default function UserActionsLoggedIn() {
  const [state,dispatch] = useCartContext();
  const [name,setName] = useState('Test');
  const navigate = useNavigate();
  const closeUserActions = ()=>{
    dispatch({
      type:"SHOW_USER_ACTIONS"
    });
  }

  const getUserDetails = async (id)=>{
    const response = await getUser(id);
    console.log("response : ",response);
    setName(response[0].name);
  }

  useEffect(()=>{
    const id = localStorage.getItem('id');
    getUserDetails(id);
  },[]);

  const handleLogout = ()=>{
    closeUserActions();
    localStorage.removeItem('id');
    localStorage.removeItem('user');
    navigate('/');
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
        <li className="p-2">{name}</li>
        <hr/>
        <Link to={"products"}  onClick={closeUserActions}>
          <li className="hover:bg-gray-200 hover:cursor-pointer p-2">
            All eBooks
          </li>
        </Link>
        <Link to={"cart"}  onClick={closeUserActions}>
          <li className="hover:bg-gray-200 hover:cursor-pointer p-2">My Dashboard</li>
        </Link>
          <li className="hover:bg-gray-200 hover:cursor-pointer p-2" onClick={handleLogout}>
            Logout
          </li>
      </ul>
    </div>
  );
}
