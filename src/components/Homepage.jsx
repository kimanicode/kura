import React from 'react'
import Banner from './Banner'
import About from './About'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import SecondaryCTA from './SecondaryCTA'


const Homepage = () => {
  return (
    <div className='w-full px-10'>
        
        <Banner />
        <About/>
        <HowItWorks/>
        <Testimonials />
        <SecondaryCTA />
       

      
    </div>
  )
}

export default Homepage

