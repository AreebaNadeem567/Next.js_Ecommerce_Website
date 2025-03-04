import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-black">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="flex overflow-x-auto space-x-4 sm:space-x-6 lg:space-x-8">
            {/* First Card */}
            <div className="flex-none bg-gradient-to-r from-black to-gray-700 h-auto w-60 sm:w-72 lg:w-80 flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://i.pinimg.com/564x/30/30/6f/30306f5f822e71d0359f052de6309469.jpg"
                  alt="burger 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25"></div>
                <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                  Classic Bites
                </h3>
              </a>
            </div>

            {/* Second Card */}
            <div className="flex-none bg-gradient-to-r from-black to-gray-700 h-auto w-60 sm:w-72 lg:w-80 flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="https://i.pinimg.com/564x/f5/84/22/f584223b4cb07cda004c66f3874d3dbc.jpg"
                  alt="burger 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25"></div>
                <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                  Gourmet Grills
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2">
                {/* Third Card */}
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://i.pinimg.com/564x/81/74/5a/81745a7b3dd0651cdef3ddc3f7c79d02.jpg"
                    alt="burger 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                    Spicy Masala
                  </h3>
                </a>

                {/* Fourth Card */}
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://i.pinimg.com/564x/5f/49/bf/5f49bfa99f5940fda7fbf6623127416d.jpg"
                    alt="burger 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                    Veggie
                  </h3>
                </a>
              </div>
            </div>

            {/* Fifth Card */}
            <div className="flex-none bg-gradient-to-r from-black to-gray-700 h-auto w-60 sm:w-72 lg:w-80 flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://i.pinimg.com/564x/3b/6c/c6/3b6cc651e4cd1cbc7fa7d559a5b81810.jpg"
                  alt="burger 5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4">
                  Cheesy Delights
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
