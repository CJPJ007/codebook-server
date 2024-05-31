import React from "react";

export default function Review({ review }) {
  return (
    <div className="border-[1px] border-black/10 p-4 flex flex-col items-center space-y-10">
      {/* {JSON.stringify(review)} */}
      <h1 className="font-bold text-xl">{review.title}</h1>
      <p className="pb-6">{review.desc}</p>
      <div className="flex space-x-2 items-center">
        <img
          className="h-10 aspect-square rounded-full"
          src={review.imageSource}
          alt=""
        />
        <div>
          <p className="font-bold">{review.name}</p>
          <p>{review.position}</p>
        </div>
      </div>
    </div>
  );
}
