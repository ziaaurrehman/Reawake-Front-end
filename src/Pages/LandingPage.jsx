import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Welcome from '../Components/Welcome'
import Whyme from '../Components/Whyme'
import Review from '../Components/Review'
import OurTeam from '../Components/OurTeam'
import Footer from '../Components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Welcome/>
        <Whyme/>
        <Review/>
        <OurTeam/>
        <Footer/>
        </div>
  )
}

export default LandingPage