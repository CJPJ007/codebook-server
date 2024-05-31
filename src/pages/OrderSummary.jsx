import React from 'react'
import Heading from '../components/Layouts/Heading'
import { Link } from 'react-router-dom'

export default function OrderSummary() {
  return (
    <div className="flex items-center justify-center">
        <div className="border-[1px] flex flex-col items-center w-1/3 border-black/10 rounded-md p-4 m-4 space-y-5">
            <Heading headingName={"OrderSummary"} />
            <p className="text-green-400">Order place succefully!!!</p>
            <Link to={'/products'}>
                <button className='p-2 bg-blue-500 rounded-md text-white'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}
