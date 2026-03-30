import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen md:min-h-[700px] pt-28 flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 w-full grid md:grid-cols-2 gap-10 items-center text-white">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            Redefine Your Space with Timeless Furniture
          </h1>

          <p className="mt-4 max-w-lg text-gray-200 font-light">
            Discover modern furniture collections crafted for comfort,
            function, and style.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 w-[180px] transition">
              Shop Now
            </button>

            <button className="border px-6 py-3 rounded-full hover:bg-white hover:text-black w-[180px] transition">
              Explore
            </button>
          </div>
        </div>

        {/* RIGHT FLOATING CARD */}
        <div className="hidden md:flex justify-center">
          
          <div className="relative w-[280px] h-[350px] bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-4 animate-float">
            
            <img
              src={assets.chair} // dummy product image
              alt=""
              className="w-full h-[220px] object-cover rounded-lg"
            />

            <h3 className="mt-4 text-lg font-medium text-white">
              Wooden Chair
            </h3>

            <p className="text-orange-400">$120</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;