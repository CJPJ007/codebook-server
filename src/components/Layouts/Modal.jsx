import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ modal, setModal }) {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        modal.showModal
          ? "absolute z-10 w-full flex items-center justify-center"
          : "hidden"
      }`}
    >
      <div className="absolute z-10 flex w-full flex-col p-10 rounded-md items-center bg-white border-[1px] border-black shadow-md shadow-black space-y-10 md:w-1/4 justify-center">
        <h1 className="text-2xl text-nowrap font-bold">{modal.title}</h1>
        {modal.type === "SUCCESS" ? (
          <i className="bi bi-check-circle-fill text-7xl text-green-700"></i>
        ) : (
          <i className="bi bi-x-circle-fill text-7xl text-red-700"></i>
        )}
        <p>{modal.message}</p>
        <button
          onClick={() => {
            setModal({
              ...modal,
              showModal: !modal.showModal,
            });
            if (modal.type === "SUCCESS") navigate(modal.link);
          }}
          className={`py-2 px-8 ${
            modal.type === "SUCCESS" ? "bg-green-700" : "bg-red-700"
          } text-white rounded-md`}
        >
          {modal.buttonText}
        </button>
      </div>
    </div>
  );
}
