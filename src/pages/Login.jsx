import React, { useRef, useState } from "react";
import Modal from "../components/Layouts/Modal";
import { loginUser } from "../services/UserService";

export default function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [modal, setModal] = useState({});
  const login = async (e) => {
    e.preventDefault();
    console.log("Inside login ");
    const response = await loginUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    if (response && response.accessToken) {
      setModal({
        showModal: true,
        buttonText: "Ok",
        message: "Login Successfull",
        title: "User LoggedIn",
        type: "SUCCESS",
        link:"/cart"
      });
      localStorage.setItem("user", response.accessToken);
      localStorage.setItem("id",response.user.id);
    } else {
      setModal({
        showModal: true,
        buttonText: "Close",
        message: `${response ? response.replaceAll('"', "") : "Login Failed"}`,
        title: "User LogIn Failed",
        type: "ERROR",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Modal modal={modal} setModal={setModal} />
      <form
        action=""
        className="flex flex-col items-center justify-center space-y-5 md:w-3/4 m-4 p-2"
      >
        <label htmlFor="user">Enter your email</label>
        <input
          type="text"
          name="user"
          ref={emailRef}
          placeholder="Email"
          className="w-full p-4 bg-gray-200 rounded-md focus:outline-none"
        />
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          name="password"
          ref={passwordRef}
          placeholder="Password"
          className="w-full p-4 bg-gray-200 rounded-md focus:outline-none"
        />
        <button
          className="bg-green-400 p-4 rounded-md hover:bg-green-700 text-white"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
}
