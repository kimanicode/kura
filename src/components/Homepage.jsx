import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import SecondaryCTA from './SecondaryCTA'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
        <NavBar />
        <Banner />
        <About/>
        <HowItWorks/>
        <Testimonials />
        <SecondaryCTA />
        <Footer/>

      
    </div>
  )
}

export default Homepage

