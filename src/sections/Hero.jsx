
import { assets } from "../assets/assets.js";
const Hero = () => {
  return (
    <section className="relative h-[90vh] bg-cover bg-center flex items-center" 
    style={{ backgroundImage: `url(${assets.hero})` }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl ml-[12%] px-4 text-white">
        <h1 className="text-3xl md:text-6xl font-bold leading-snug font-normal">
          Redefine Your Space <br/>with Timeless Furniture
        </h1>
        <p className="mt-4 max-w-lg text-[#fafafa] font-light">
          Discover modern furniture collections crafted for comfort, function, and style. From living rooms to bedrooms. We bring beauty to every corner of your home.
        </p>

        <div className="flex gap-4">
        <button className="mt-6 bg-orange-500 px-6 py-3 rounded-4xl hover:bg-orange-600 font-light w-[208px] transition-all duration-500">
          Shop Now
        </button>

        <button className="mt-6 bg-transparent px-8 py-4 rounded-4xl hover:bg-white hover:text-dark font-light border-1 w-[208px] transition-all duration-500">
          Explore Collection
        </button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;