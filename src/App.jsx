import React from 'react'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Home />
    </div>
  )
}

export default App