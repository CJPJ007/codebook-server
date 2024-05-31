import React, { useEffect, useState } from "react";
import { useCartContext } from "../../helpers/Context/CartProvider";
import TotalAmount from "../Cart/TotalAmount";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/UserService";

export default function Payment({ show, setShow }) {
    const [user,setUser] = useState('');
    const [state,dispatch] = useCartContext();
    const navigate = useNavigate();
    const makePayment = (e)=>{
        e.preventDefault();
        dispatch({
          type:"CLEAR_CART"
        });
        navigate("/order-summary");
    }
    const getUserDetails = async (id)=>{
      const response = await getUser(id);
      console.log("response : ",response);
      setUser(response[0]);
    }
  
    useEffect(()=>{
      const id = localStorage.getItem('id');
      getUserDetails(id);
    },[]);
  return (
    <div
      className={`${
        show
          ? "z-10 absolute top-[50%] text-sm bg-slate-300 right-[50%] flex items-center justify-center"
          : "hidden"
      }`}
    >
      <div className="bg-white absolute flex flex-col items-center">
        <div className="flex w-full mb-4 text-xl justify-between">
          <div className="flex space-x-4">
            <i className="bi bi-credit-card"></i>
            <h1 className="text-nowrap ">Card Payment</h1>
          </div>
          <i className="bi bi-x-lg hover:cursor-pointer" onClick={()=>setShow(!show)}></i>
        </div>
        <form action="" className="space-y-4 flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id=""
            value={user.name}
            disabled
            className="p-2 bg-gray-300/40 focus:outline-none border-2 rounded-md border-gray-200/50"
          />
          <label htmlFor="eMail">Email:</label>
          <input
            type="text"
            name="eMail"
            id=""
            value={user.email}
            disabled
            className="p-2 bg-gray-300/40 focus:outline-none border-2 rounded-md border-gray-200/50"
          />
          <label htmlFor="cardNum">Card Number:</label>
          <input
            type="text"
            name="cardNum"
            id=""
            className="p-2 bg-gray-300/40 focus:outline-none border-2 rounded-md border-gray-200/50"
          />
          <label htmlFor="expDate">Expiry Date:</label>
          <div className="flex space-x-4">
            <input
              type="text"
              name="expDate"
              id=""
              className="p-2 bg-gray-300/40 focus:outline-none border-2 rounded-md border-gray-200/50"
            />
            <input
              type="text"
              name="expDate"
              id=""
              className="p-2 bg-gray-300/40 focus:outline-none border-2 rounded-md border-gray-200/50"
            />
          </div>
          <label htmlFor="cardNum">CVV:</label>
          <input
            type="text"
            name="cvv"
            id=""
            className="p-2 bg-gray-300/40 focus:outline-none border-2 rounded-md border-gray-200/50"
          />
          <TotalAmount cartProducts={state.cartProducts}/>
          <button className="bg-blue-500 rounded-md py-1 px-2 text-white" onClick={makePayment}>Pay Now <i class="bi bi-lock-fill"></i></button>
        </form>
      </div>
    </div>
  );
}
