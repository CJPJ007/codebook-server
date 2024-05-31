import React, { useState } from 'react'
import Payment from '../Payments/Payment';

export default function PlaceOrder() {
  const [showPayment,setShowPayment] = useState(false);
  

  return (
    <div className=''>

            <Payment show={showPayment} setShow={setShowPayment}/>

    <div className='p-2 float-end'>
       <button className='p-3 rounded-md bg-blue-600 text-white text-md' onClick={()=>setShowPayment(!showPayment)}>Place Order <i class="bi bi-arrow-right"></i></button>
    </div>
    </div>
  )
}
