import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-between w-full border-[1px] text-gray-800/50 p-6">
      <p className="text-sm text-gray-800/50">
        © 2030 CodeBook. All Rights Reserved.
      </p>
      <div className="flex space-x-4">
        <Link>
          <i className="bi bi-instagram"></i>
        </Link>
        <Link>
          <i className="bi bi-twitter"></i>
        </Link>
        <Link>
          <i className="bi bi-github"></i>
        </Link>
        <Link>
          <i className="bi bi-facebook"></i>
        </Link>
        <Link>
          <i className="bi bi-youtube"></i>
        </Link>
      </div>
    </footer>
  );
}
