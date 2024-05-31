import React from 'react'
import { useFetchReviews } from '../../services/ReviewService';
import Reviews from '../Review/Reviews';
import Heading from '../Layouts/Heading';

export default function ReviewSection() {
  const [,result] = useFetchReviews();
  return (
    <div className='flex flex-col items-center space-y-2 p-4'>
    <Heading headingName={"Student About CodeBook"} />
    {
      result && result.length!==0
      ?<Reviews reviews={result}/>
      :<p>No reviews available</p>
    }
    </div>
  )
}
