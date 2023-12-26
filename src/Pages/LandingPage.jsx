import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Welcome from '../Components/Welcome'
import Whyme from '../Components/Whyme'
import Review from '../Components/Review'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Welcome/>
        <Whyme/>
        <Review/>
        </div>
  )
}

export default LandingPage