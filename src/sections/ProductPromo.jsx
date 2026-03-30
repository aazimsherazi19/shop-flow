import { useEffect, useState } from "react";
import { assets } from ".././assets/assets";

const images = [
  assets.p1,
  assets.p2,
  assets.p3,
];

const ProductPromo = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-10 bg-[#f9f9f9]">
      
      <div className="max-w-6xl mx-auto">

        {/* CARD */}
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden min-h-[320px] md:min-h-[380px]">

          {/* LEFT DISCOUNT */}
          <div className="bg-dark text-white p-6 flex flex-col justify-between md:w-[30%]">
            
            <div>
              <span className="bg-primary text-white text-xs font-medium px-4 py-1 rounded-full inline-block">
                NEW MEMBER DISCOUNT
              </span>

              <div className="mt-6">
                <h2 className="text-4xl md:text-5xl font-bold">45%</h2>
                <p className="text-xl font-semibold">OFF</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs text-gray-300">Coupon Code:</p>
              <div className="bg-white text-dark px-3 py-1.5 rounded mt-2 inline-block text-sm">
                KFIS04LKF
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 p-6 flex flex-col md:flex-row items-center gap-6">

            {/* TEXT */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <h3 className="text-lg font-semibold text-primary">
                Rs.3,300.00
              </h3>

              <h2 className="text-2xl md:text-3xl font-semibold text-dark">
                Head Set Organizer
              </h2>

              <p className="text-gray-500 text-sm max-w-md mx-auto md:mx-0">
                Keep your headset tangle-free and within reach with this sleek wooden organizer.
              </p>

              <button className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition">
                Shop Now
              </button>
            </div>

            {/* IMAGE */}
            <div className="flex-1 flex justify-center">
              <div className="aspect-square w-[220px] md:w-[280px] flex items-center justify-center">
                <img
                  src={images[current]}
                  alt="product"
                  className="max-h-full object-contain transition-all duration-500"
                />
              </div>
            </div>

          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition ${
                current === index ? "bg-primary" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductPromo;