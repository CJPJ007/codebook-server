import React from "react";
import Heading from "../Layouts/Heading";
import { useFQA } from "../../services/FAQService";
import Question from "../FAQuestions/Question";

export default function FAQuestions() {
  const [, result] = useFQA();
  return (
    <div className="flex flex-col items-center border-[1px] border-black/5 m-4 p-6 shadow-md shadow-black/5">
      <Heading headingName={"Question in mind?"} />
      <div className="p-4 md:w-full">
        {result && result.length !== 0 ? (
          result.map((faquestion, ind) => {
            return <Question faquestion={faquestion} key={ind} />;
          })
        ) : (
          <p>No FAQuestions available at current moment</p>
        )}
      </div>
    </div>
  );
}
