import React from 'react'
import SortFilter from './ProductFilters/SortFilter'
import RatingFilter from './ProductFilters/RatingFilter'
import OtherFilter from './ProductFilters/OtherFilter'
import { useProductFilterContext } from '../../helpers/Context/ProductFilterProvider'

export default function ProductFilter({show,setShow,result,setResult}) {
  const [,dispatch] = useProductFilterContext();
  const clearAllFilters = ()=>{
    dispatch({
      type:"CLEAR_ALL_FILTERS"
    })
  }
  return (
    <div className={`${show?"visible left-0 top-0 z-20 bg-white p-6 space-y-5 md:w-1/4 h-screen fixed overflow-y-auto":"hidden"}`}> 
      <div className='text-gray-700/50 text-xl flex items-center justify-between'>
        <h1>Filters</h1>
        <button onClick={()=>setShow(false)}><i class="bi bi-x"></i></button>
      </div>
      <hr />
      <SortFilter setResult={setResult}/>
      <hr />
      <RatingFilter setResult={setResult} result={result}/>
      <hr />
      <OtherFilter setResult={setResult} result={result}/>
      <button className='px-4 py-2 rounded-md bg-gray-200/50 border-[1px] border-black' onClick={clearAllFilters}>Clear Filter</button>
    </div>
  )
}
