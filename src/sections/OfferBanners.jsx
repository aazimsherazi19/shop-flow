import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const products = [
  {
    id: 1,
    name: "Head Set Organizer",
    price: "Rs.3,300.00",
    oldPrice: "Rs.3,699.00",
    description: "Keep your headset tangle-free and within reach with this sleek wooden organizer.",
    img: assets.Offer1,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: "Rs.1,200.00",
    oldPrice: "Rs.1,499.00",
    description: "Keep your headset tangle-free and within reach with this sleek wooden organizer.",
    img: assets.Offer1,
  },
  {
    id: 3,
    name: "Keyboard Stand",
    price: "Rs.2,500.00",
    oldPrice: "Rs.2,899.00",
    description: "Keep your headset tangle-free and within reach with this sleek wooden organizer.",
    img: assets.Offer1,
  },
];

const OfferBanners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel auto-change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-10 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row rounded-2xl shadow-md overflow-hidden items-center">
        {/* LEFT BANNER */}
        <div className="">
          <div className="aspect-[1/1] relative h-[100px] min-w-[250px] rounded-tl-2xl overflow-hidden group cursor-pointer bg-primary px-3 py-6 text-center">
            <h3 className="font-semibold text-white text-xl">
              New Member Discount
            </h3>
          </div>

          <div className="aspect-[1/2] relative h-[440px] min-w-[250px] rounded-bl-2xl overflow-hidden group cursor-pointer bg-[#1C2533] px-3 py-14">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <h3 className="absolute top-12 text-5xl md:text-7xl font-bold text-transparent text-stroke opacity-60">
                45% OFF
              </h3>
              <h3 className="text-5xl md:text-7xl font-bold text-white z-10">
                45% OFF
              </h3>
              <h3 className="absolute bottom-20 text-5xl md:text-7xl font-bold text-transparent text-stroke opacity-60">
                45% OFF
              </h3>
            </div>

            <div className="absolute bottom-2 left-0 w-full flex flex-col items-center gap-3 pt-2">
              <p className="text-primary font-light text-sm">Coupon Code:</p>
              <button className="bg-white text-dark px-8 py-2 rounded-xl text-md font-semibold hover:opacity-90 transition">
                KFIS04LKF
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT BANNER */}
        <div className=" flex-1 h-[600px] rounded-2xl bg-[#f2f2f2] overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-10 md:pl-20 lg:pl-28">
          {/* left */}
          <div className="flex flex-col gap-4">

            <div className="flex items-center gap-3">
              <h3 className="text-5xl font-medium text-dark">{products[currentIndex].price}</h3>
              <p className="text-[#C5C5C5] line-through text-lg">{products[currentIndex].oldPrice}</p>
            </div>

            <h3 className="text-5xl font-medium text-dark">{products[currentIndex].name}</h3>
            <div className="w-[150px] h-[1px] bg-dark mt-6"></div>

            <p className="text-[#5E5E5E] mt-6">{products[currentIndex].description}</p>

            <div>
              <button className="button">
                Shop Now
              </button>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-2 items-center">
            <div>
              <img src={products[currentIndex].img} alt="" className="max-w-[220px] md:max-w-[280px] lg:max-w-[320px]" />
          </div>

          <div className="flex justify-center gap-3">
            {products.map((_, index)=> (
              <div key={index} className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? "bg-primary " : "bg-gray-300"}`}>

              </div>
          
            ))}
          </div>
            </div>
            
        </div> 
      </div>
      </div>
    </section>
  );
};

export default OfferBanners;