import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import ProductCard from "../components/product/ProductCard";
import { assets } from '../assets/assets';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "A-Shaped Glass Tube Vase",
      price: "Rs.2,500.00",
      oldPrice: "Rs.3,200.00",
      image: assets.p1,
    },
    {
      id: 2,
      title: "Sheesham Ocean Drift Timepiece",
      price: "Rs.11,650.00",
      oldPrice: "Rs.12,950.00",
      image: assets.p2,
    },
    {
      id: 3,
      title: "A-Shaped Glass Tube Vase",
      price: "Rs.2,500.00",
      oldPrice: "Rs.3,200.00",
      image: assets.p3,
    },
    {
      id: 4,
      title: "Candlewood Stand",
      price: "Rs.4,500.00",
      oldPrice: "Rs.5,200.00",
      image: assets.p4,
    },
    {
      id: 5,
      title: "Cheese Board",
      price: "Rs.4,600.00",
      oldPrice: "Rs.5,100.00",
      image: assets.p1,
    },
    {
      id: 6,
      title: "Classic Wormwood Wall Clock",
      price: "Rs.5,500.00",
      oldPrice: "Rs.6,300.00",
      image: assets.p6,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-[#f9f9f9]">
      
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <SectionTitle
          title="Best Selling Products"
          top="Best Products"
        />

        {/* TABS */}
        <div className="flex justify-center gap-6 mt-6 text-sm">
          <span className="text-orange-500 cursor-pointer">ALL</span>
          <span className="text-gray-500 cursor-pointer hover:text-black">NEWEST</span>
          <span className="text-gray-500 cursor-pointer hover:text-black">TRENDING</span>
          <span className="text-gray-500 cursor-pointer hover:text-black">BEST SELLERS</span>
          <span className="text-gray-500 cursor-pointer hover:text-black">FEATURED</span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            See All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;




