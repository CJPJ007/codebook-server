import React from 'react'
import Review from './Review'

export default function Reviews({reviews}) {
  return (
    <div className='grid grid-cols-2'>
      {
        reviews.map((review,ind)=>{
            return <Review review={review} key={ind}/>
        })
      }
    </div>
  )
}
