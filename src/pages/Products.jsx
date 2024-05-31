import React, { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";
import { useGetProductList } from "../services/ProductService";
import Loader from "../components/Loader";
import Product from "../components/Products/Product";
import Heading from "../components/Layouts/Heading";
import ProductFilter from "../components/Products/ProductFilter";
import { useProductFilterContext } from "../helpers/Context/ProductFilterProvider";

export default function Products() {
  const [showProdFil, setShowProdFil] = useState(false);
  const urlLocation = useLocation().search;
  const productFilterValue = new URLSearchParams(urlLocation).get("q");
  console.log(useGetProductList(productFilterValue));
  const [state,dispatch] = useProductFilterContext();
  const [loading, data] = useGetProductList(productFilterValue);
  
  useEffect(()=>{
    dispatch({
      type:"INITIAL_PRODUCTS",
      payload:data
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data]);

  return (
    <>
      <ProductFilter show={showProdFil} setShow={setShowProdFil}/>
      <div className="flex justify-between mx-4 my-8">
        <Heading headingName={`All eBooks (${state.filteredProducts.length})`} />
        <div
          className="bg-gray-200 px-2 py-1 rounded-md hover:cursor-pointer"
          onClick={() => setShowProdFil(!showProdFil)}
        >
          <i class="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 m-4">
        {loading ? (
          <Loader />
        ) : (
          state.filteredProducts.map((ele, ind) => {
            return (
                <Product key={ind} productDetails={ele} />
            );
          })
        )}
      </div>
    </>
  );
}
