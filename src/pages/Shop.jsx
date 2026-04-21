import React, { useContext, useState, useMemo, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import SectionTitle from '../components/ui/SectionTitle';
import { useLocation } from "react-router-dom";


const Shop = () => {
  const { products } = useContext(ShopContext);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchQuery = params.get("search") || "";
  const categoryQuery = params.get("category");

  const [selectedCategory, setSelectedCategory] = useState(categoryQuery || "All");
  const [sortType, setSortType] = useState("default");

  // Sync category if URL category changes
  useEffect(() => {
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    }
  }, [categoryQuery]);

  // Filtering and Sorting logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // 1. Search Query Filter
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      result = result.filter(item => 
        (item.name || '').toLowerCase().includes(lowercasedQuery)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== "All") {
      result = result.filter(item => item.category === selectedCategory);
    }

    // 3. Sorting
    if (sortType === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortType === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, sortType, searchQuery]);

  return (
    <div className="pt-32 pb-16 px-4 md:px-10 bg-[#f9f9f9] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Shop Our Collection" top="Shop" />
        
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="flex flex-col gap-3">
                {categories.map((cat, index) => (
                  <li 
                    key={index} 
                    className={`cursor-pointer ${selectedCategory === cat ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-black'}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mt-8 mb-4">Sort By Price</h3>
              <select 
                className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none text-sm"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="default">Default Sorting</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                  No products found.
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Shop;
