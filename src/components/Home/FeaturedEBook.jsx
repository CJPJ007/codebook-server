import React from "react";
import Heading from "../Layouts/Heading";
import { useFeaturedProductList } from "../../services/ProductService";
import Product from "../Products/Product";

export default function FeaturedEBook() {
  const [, featuredEBooksList] = useFeaturedProductList();

  return (
    <div className="flex flex-col items-center">
      <Heading headingName={"Featured eBooks"} />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-4">
        {featuredEBooksList
          ? featuredEBooksList.map((featuredEBook, ind) => {
              return <Product productDetails={featuredEBook} key={ind} />;
            })
          : ""
        }
      </div>
    </div>
  );
}
