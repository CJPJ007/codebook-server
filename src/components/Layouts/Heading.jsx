import React from "react";

export default function Heading({ headingName }) {
  return (
    <h1 className="text-2xl font-bold underline underline-offset-8">
      {headingName}
    </h1>
  );
}
