import React, { useContext } from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import ProductCard from "../../components/product/ProductCard";
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const { products } = useContext(ShopContext);

  // Take the first 6 products as featured
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-16 px-4 md:px-10 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <SectionTitle
          title="Best Selling Products"
          top="Best Products"
        />

        {/* TABS */}
        <div className="flex justify-center gap-4 md:gap-6 mt-6 md:text-sm text-xs flex-wrap">
          <span className="text-orange-500 cursor-pointer">ALL</span>
          <span className="text-gray-500 cursor-pointer hover:text-black">NEWEST</span>
          <span className="text-gray-500 cursor-pointer hover:text-black">TRENDING</span>
          <span className="text-gray-500 cursor-pointer hover:text-black">BEST SELLERS</span>
          <span className="text-gray-500 cursor-pointer hover:text-black">FEATURED</span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {featuredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          <Link to="/shop">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition shadow-md">
              See All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;




