import React from 'react'
import { Link } from 'react-router-dom'

export default function NoProductsInCart() {
  return (
    <div className='flex flex-col space-y-6 w-1/3 items-center border-[1px] border-black/10 rounded-md p-2 m-6'>
        <h1 className='text-6xl text-green-800'><i className="bi bi-cart"></i></h1>
        <p>Oops No producrts in the cart</p>
        <p>Please click below to checkout our products</p>
        <Link to={'/products'}>
            <button className='p-4 bg-blue-500 rounded-md text-white'>Continue Shopping</button>
        </Link>
    </div>
  )
}
