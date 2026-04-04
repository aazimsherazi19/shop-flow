import React from 'react'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  )
}

export default App