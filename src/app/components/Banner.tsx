import React from 'react';

const Banner = () => {
  return (
    <div
     className="relative overflow-hidden bg-gradient-to-tr from-black to-grey-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://t4.ftcdn.net/jpg/05/98/75/83/360_F_598758341_NzcqKk3DX3bJhQge0Ngba47JQDmI8bHm.jpg"
          alt="delicious burger banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center h-full">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg mb-6 max-w-xl">
          Shop Now For Exclusive Burger Discount!
        </p>

        <button
          type="button"
          className="bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          Exciting Deals Launch at 12PM!
        </button>
      </div>
    </div>
  );
};

export default Banner; 