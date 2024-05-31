import React, { useState } from "react";

export default function Question({ faquestion }) {
  const [showAns, setShowAns] = useState(false);
  const [rotateCaret,setRotateCaret] = useState("0");

  return (
      <div className="p-6 space-y-6">
      <div className="flex justify-between cursor-pointer" onClick={()=>{setShowAns(!showAns);setRotateCaret(rotateCaret==="0"?"180":"0")}}>
        <p className="font-bold">{faquestion.question}</p>
        <i className={`bi bi-caret-down-fill rotate-[${rotateCaret}deg]`}></i>
      </div>
      <hr />
      <p className={`${showAns ? "visible text-sm" : "hidden"}`}>{faquestion.answer}</p>
    </div>
  );
}
