import React from 'react'
import { useProductFilterContext } from '../../../helpers/Context/ProductFilterProvider';

export default function RatingFilter() {
    const [state,dispatch] = useProductFilterContext();

    const ratingFilter = (e)=>{
        const rating = parseInt(e.target.value);
        dispatch({
            type:"RATING_FILTER",
            payload:rating
        });
    }

  return (
    <div className='space-y-2'>
      <h1>Rating</h1>
      <ul>
        <li><input type="radio" name="ratingFilter" value="4" onChange={ratingFilter} checked={state.rating===4}  />  4 Stars & above</li>
        <li><input type="radio" name="ratingFilter" value="3" onChange={ratingFilter} checked={state.rating===3}  />  3 Stars & above</li>
        <li><input type="radio" name="ratingFilter" value="2" onChange={ratingFilter} checked={state.rating===2}  />  2 Stars & above</li>
        <li><input type="radio" name="ratingFilter" value="1" onChange={ratingFilter} checked={state.rating===1}  />  1 Stars & above</li>
      </ul>
    </div>
  )
}
