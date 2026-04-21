import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartItemsCount } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isFocused, setIsFocused] = useState(false);
  
  const params = new URLSearchParams(location.search);
  const currentSearch = params.get("search") || "";
  const currentCategory = params.get("category") || "All";

  const [searchTerm, setSearchTerm] = useState(currentSearch);
  const [category, setCategory] = useState(currentCategory);

  useEffect(() => {
    setSearchTerm(currentSearch);
    setCategory(currentCategory);
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm)}&category=${category}`);
    } else {
      navigate(`/shop?category=${category}`);
    }
  };

  return (
    <>
      {/* FLOATING NAVBAR */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
        <div className="flex items-center justify-between bg-[#2f3440]/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={assets.logo}
              alt="logo"
              className="w-[90px] h-[40px] object-contain"
            />
          </Link>

          {/* MENU (Desktop) */}
          <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
            <Link to="/"><li className="hover:text-orange-400 cursor-pointer">Home</li></Link>
            <Link to="/about"><li className="hover:text-orange-400 cursor-pointer">About</li></Link>
            <Link to="/shop"><li className="hover:text-orange-400 cursor-pointer">Shop</li></Link>
            <Link to="/contact"><li className="hover:text-orange-400 cursor-pointer">Contact</li></Link>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* SEARCH BAR (Desktop only) */}
            <form 
              onSubmit={handleSearch}
              className={`hidden lg:flex items-center bg-white rounded-full px-4 py-1.5 border-2 transition-all duration-300 w-[300px] xl:w-[380px] ${isFocused ? 'border-primary shadow-[0_0_10px_rgba(255,165,0,0.3)]' : 'border-transparent'}`}
            >
              <FontAwesomeIcon icon={faSearch} className={`mr-2 transition-colors duration-300 ${isFocused ? 'text-primary' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="outline-none text-sm px-1 text-black bg-transparent flex-1 w-full placeholder-gray-400"
              />
              <div className="w-[1px] h-5 bg-gray-300 mx-2"></div>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="text-sm outline-none bg-transparent text-gray-600 cursor-pointer font-medium"
              >
                <option value="All">All</option>
                <option value="Decor">Decor</option>
                <option value="Clocks">Clocks</option>
              </select>
            </form>

            {/* CART */}
            <Link to="/cart">
              <div className="relative text-white cursor-pointer">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-xs px-1 rounded-full">
                  {getCartItemsCount()}
                </span>
              </div>
            </Link>

            {/* HAMBURGER */}
            <button
              className="md:hidden text-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-[#2f3440] text-white rounded-xl p-6 md:hidden z-40">
          <ul className="flex flex-col gap-4 text-sm">
            <Link to="/" onClick={() => setIsOpen(false)}><li className="hover:text-orange-400 cursor-pointer">Home</li></Link>
            <Link to="/about" onClick={() => setIsOpen(false)}><li className="hover:text-orange-400 cursor-pointer">About</li></Link>
            <Link to="/shop" onClick={() => setIsOpen(false)}><li className="hover:text-orange-400 cursor-pointer">Shop</li></Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}><li className="hover:text-orange-400 cursor-pointer">Contact</li></Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;