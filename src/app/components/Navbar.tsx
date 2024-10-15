import React from "react";
import { FaBolt, FaSearch, FaHamburger } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-tr from-black to-gray-900 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo Burger */}
            <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-orange-400" />

            {/* Search input */}
            <div className="relative w-full sm:w-[350px]">
              <input
                className="rounded-3xl py-2 px-3 outline-none text-base w-full pr-10"
                placeholder="Search for your favourite burgers."
              />
              <FaSearch className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Delivery time message */}
            <div className="hidden lg:flex items-center gap-1 text-white">
              <FaBolt className="w-5 h-5 text-amber-400" />
              <p className="text-sm">Order now and get it in</p>
              <span className="text-amber-400 text-sm">15 minutes!</span>
            </div>

            {/* Cart icon */}
            <FaCartShopping className="w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative hover:text-amber-400" />

            {/* User avatar */}
            <img
              className="w-8 h-8 rounded-full ring-2 ring-sky-400"
              src="https://w7.pngwing.com/pngs/1002/138/png-transparent-burger-king-logo-hamburger-burger-king-logo-restaurant-burger-king-text-fast-food-restaurant-signage-thumbnail.png"
              alt="user avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
