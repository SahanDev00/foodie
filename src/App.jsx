import React from 'react'
import Banner from './assets/components/Banner/Banner'
import Hero from './assets/components/Hero/Hero'
import Navbar from './assets/components/Navbar/Navbar'
import Services from './assets/components/Services/Services'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
    </>
  )
}

export default App
