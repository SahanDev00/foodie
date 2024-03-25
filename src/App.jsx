import React from 'react'
import AppStore from './assets/components/AppStore/AppStore'
import Banner from './assets/components/Banner/Banner'
import Footer from './assets/components/Footer/Footer'
import Hero from './assets/components/Hero/Hero'
import Navbar from './assets/components/Navbar/Navbar'
import Services from './assets/components/Services/Services'
import Testimonial from './assets/components/Testimonial/Testimonial'

const App = () => {
  return (
    <>
    <div className='bg-white dark:dark:bg-gray-900 dark:text-white duration-200'>
       <Navbar/>
       <Hero/>
       <Services/>
       <Banner/>
       <AppStore/>
       <Testimonial/>
       <Footer/>
    </div>
    </>
  )
}

export default App
