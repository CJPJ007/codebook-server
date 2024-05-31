import React from 'react'
import { useProductFilterContext } from '../../../helpers/Context/ProductFilterProvider';

export default function OtherFilter() {
   const [state,dispatch] = useProductFilterContext();
    const filterBestSellerOnly = (e)=>{
        dispatch({
            type:"BEST_SELLER_FILTER"
        });
    };

    const filterInStockOnly = (e)=>{
        dispatch({
            type:"INSTOCK_ONLY_FILTER"
        });
    };
  return (
    <div className='space-y-2'>
      <h1>Other Filters</h1>
      <ul>
        <li>
            <input type="checkbox" name="" id="" onChange={filterBestSellerOnly} checked={state.bestSellerOnly}/> Best Seller Only
        </li>
        <li>
            <input type="checkbox" name="" id=""  onChange={filterInStockOnly} checked={state.inStockOnly}/> INSTOCK Only
        </li>
      </ul>
    </div>
  )
}
