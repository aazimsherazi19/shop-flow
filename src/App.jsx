import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Text from './sections/Text'
import FeatureBoxes from './sections/FeatureBoxes'
import { assets } from './assets/assets'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white ">
     <Navbar/>
     <Hero/>
     <Features/>
     <Text/>
     <FeatureBoxes
  box1={{
    image: assets.box1,
    title: "Luxury Living Room",
    desc: "Modern & Elegant",
  }}
  box2={{
    image: assets.box2,
    title: "Wooden Clock",
  }}
  box3={{
    image: assets.box3,
    title: "Minimal Chair",
  }}
  box4={{
    image: assets.box4,
    title: "Table Decor",
  }}
/>
    </div>
  )
}

export default App
