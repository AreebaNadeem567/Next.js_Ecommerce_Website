import React from "react";

const ReservationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black to-slate-900 py-10">
      <div 
       id="contact"
      className="container mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Make A Reservation
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              className="w-full p-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="time"
              className="w-full p-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;