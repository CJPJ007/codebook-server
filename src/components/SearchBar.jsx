import React, { useRef } from 'react'
import { useCartContext } from '../helpers/Context/CartProvider'
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [state,] = useCartContext();
    const searchRef = useRef();
    const navigate = useNavigate();
    console.log("SearchBar : state : ",state);

    const showProducts = ()=>{
        navigate('/products?q='+searchRef.current.value);
    }

  return (
    <div className={`${state.toggleSearch?'visible my-4 p-2 w-full flex space-x-2 text-xs':' hidden'}`}>
      <div className='flex items-center space-x-2 border-[1px] w-full border-black/10 rounded-md p-3 bg-gray-100/95 focus:outline-none'>
      <span><i className="bi bi-search"></i></span>
      <input ref={searchRef} placeholder='Search' className='bg-transparent w-full focus:outline-none' />
      </div>
      <button className='bg-blue-500 text-white rounded-md p-3' onClick={showProducts}><i className="bi bi-search"></i></button>
    </div>
  )
}
