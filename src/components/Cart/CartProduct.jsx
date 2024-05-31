import React from 'react'
import { useCartContext } from '../../helpers/Context/CartProvider'

export default function CartProduct({cartProduct}) {
    const [,dispatch] = useCartContext();

    const removeFromCart = ()=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:cartProduct.id
        })
    }

  return (
    <>
    <div className='flex justify-between'>
      <div className='flex space-x-4 items-center'>
        <img src={cartProduct.imageSource} alt={cartProduct.name} className='h-16 aspect-video rounded-md object-cover'/>
        <div className='flex flex-col items-center'>
            <p className='text-xl'>{cartProduct.name}</p>
            <button className='rounded-md bg-red-600 text-white p-1 text-sm' onClick={removeFromCart}><i class="bi bi-trash"></i></button>
        </div>
      </div>
      <p>{cartProduct.price} Rs/-</p>
    </div>
    <hr />
    </>
  )
}
