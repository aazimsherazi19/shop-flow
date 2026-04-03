import React from 'react'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Text from '../sections/Text'
import FeatureBoxes from '../sections/FeatureBoxes'
import FeaturedProducts from '../sections/FeaturedProducts'
import PromoBanner from '../sections/PromoBanner'
import Features2 from '../sections/Features2'
import OfferBanners from '../sections/OfferBanners'
import Banners3 from '../sections/Banners3'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <>
      <Hero />

      <Features boxes={[
        { icon: assets.f1, heading: "Premium Materials", text: "Crafted with lasting quality" },
        { icon: assets.f2, heading: "Fast Delivery", text: "Quick and safe to your door." },
        { icon: assets.f3, heading: "Custom Options", text: "Fit your space, your way." },
        { icon: assets.f4, heading: "Easy Support", text: "Help is just a click away." },
      ]} />

      <Text>
        <span className="text-[#c5c5c5]">Explore our</span> top furniture categories{" "}
        <span className="text-[#c5c5c5]">and find the perfect pieces to</span> improve your space{" "}
        <span className="text-[#c5c5c5]">with</span> comfort, style, and modern minimalist charm.
      </Text>

      <FeatureBoxes
        box1={{
          image: assets.box1,
          title: "Coffee Tables",
          desc: "120+ items",
        }}
        box2={{
          image: assets.box2,
          title: "Wall Clocks",
          desc: "150+ items",
        }}
        box3={{
          image: assets.box3,
          title: "Games",
          desc: "80+ items",
        }}
        box4={{
          image: assets.box4,
          title: "All Categories",
        }}
      />

      <FeaturedProducts />
      <PromoBanner />

      <Features2 boxes={[
        { icon: assets.f1, heading: "Timeless Design", text: "Our pieces are made to stay in style — today, tomorrow, and years ahead." },
        { icon: assets.f2, heading: "Premium Quality", text: "Designed for modern living with space-saving and user-friendly features." },
        { icon: assets.f3, heading: "Smart Functionality", text: "Created with the modern home in mind, our designs feature smart." },
        { icon: assets.f4, heading: "Trusted by Many", text: "Loved by thousands of happy customers and design-conscious homeowners." },
      ]} />

      <OfferBanners />
      <Banners3 />
    </>
  )
}

export default Home