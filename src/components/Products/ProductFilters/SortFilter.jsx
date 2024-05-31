import React from 'react'
import { useProductFilterContext } from '../../../helpers/Context/ProductFilterProvider';

export default function SortFilter({setResult}) {
    const [state,dispatch] = useProductFilterContext();
    
    const sortLowToHigh = ()=>{
        console.log("Inside sortLowToHigh");
        dispatch({
            type:"SORT_PRODUCTS",
            payload: "L2H"
        });
    }

    const sortHighToLow = ()=>{
        console.log("Inside sortHighToLow");
        dispatch({
            type:"SORT_PRODUCTS",
            payload: "H2L"
        });
    }
  return (
    <div className='space-y-2'>
      <h1>Sort by</h1>
      <ul>
        <li><input type="radio" name="sortFilter" onChange={sortLowToHigh} checked={state.sortBy==="L2H"}/>  Price - Low to High</li>
        <li><input type="radio" name="sortFilter" onChange={sortHighToLow} checked={state.sortBy==="H2L"}/>  Price - High to Low</li>
      </ul>
    </div>
  )
}
