import React from "react";
import { FaBolt, FaSearch } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-tr from-black to-gray-900">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {/* Logo Burger */}
                <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-orange-400" />

                {/* Search icon */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-lg w-[350px] pr-10"
                    placeholder="Search for your favourite burgers from the menu."
                  />
                  <FaSearch className="w-5 h-5 text-gray-900 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block" />
                <p className="text-sm text-white hidden lg:block md:block">
                  Order now and get it in
                </p>
                <span className="text-amber-400">15 minutes!</span>

                {/* Cart icon */}
                <FaCartShopping className="w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative hover:text-amber-400" />

                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-400"
                  src="https://w7.pngwing.com/pngs/1002/138/png-transparent-burger-king-logo-hamburger-burger-king-logo-restaurant-burger-king-text-fast-food-restaurant-signage-thumbnail.png"
                  alt="user avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
