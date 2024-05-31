import React from "react";
import { Link } from "react-router-dom";

export default function Heros() {
  return (
    <div className="flex space-x-4 p-4">
      <div className="space-y-10">
        <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
        <p className="text-3xl">
          CodeBook is the world's most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </p>
        <button className="p-3 rounded-md text-white bg-blue-600">
          <Link to={"/products"}>Explore eBooks</Link>
        </button>
      </div>
      <img src="/eBooksImages/heros.jpg" className="h-96" alt="" />
    </div>
  );
}
