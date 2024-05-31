import React from 'react'
import Heros from '../components/Home/Heros'
import FeaturedEBook from '../components/Home/FeaturedEBook'
import ReviewSection from '../components/Home/ReviewSection'
import FAQuestions from '../components/Home/FAQuestions'

export default function Home() {
  return (
    <div>
      <Heros/>
      <FeaturedEBook/>
      <ReviewSection/>
      <FAQuestions/>
    </div>
  )
}
