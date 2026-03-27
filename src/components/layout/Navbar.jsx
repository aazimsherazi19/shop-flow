import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {assets} from "../../assets/assets.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* FLOATING NAVBAR */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
        <div className="flex items-center justify-between bg-[#2f3440]/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src={assets.logo}
              alt="logo"
              className="w-[90px] h-[40px] object-contain"
            />
          </div>

          {/* MENU (Desktop) */}
          <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">About</li>
            <li className="hover:text-orange-400 cursor-pointer">Shop</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* SEARCH BAR (Desktop only) */}
            <div className="hidden lg:flex items-center bg-white rounded-full px-3 py-1">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="outline-none text-sm px-1"
              />
              <select className="text-sm outline-none ml-2">
                <option>All</option>
                <option>Chair</option>
                <option>Table</option>
              </select>
            </div>

            {/* CART */}
            <div className="relative text-white cursor-pointer">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-xs px-1 rounded-full">
                2
              </span>
            </div>

            {/* HAMBURGER */}
            <button
              className="md:hidden text-white"
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
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;