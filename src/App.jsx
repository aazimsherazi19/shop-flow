import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white ">
     <Navbar/>
     <Hero/>
     <Features/>
    </div>
  )
}

export default App
