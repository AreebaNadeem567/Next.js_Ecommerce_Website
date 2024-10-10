import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const productImages = [
    "https://i.pinimg.com/564x/4d/5d/98/4d5d981b39836c44755b4f9414ab8de1.jpg",
    "https://i.pinimg.com/564x/d2/01/e9/d201e9814ca37981301629a106731c03.jpg",
    "https://i.pinimg.com/564x/e5/6c/7e/e56c7e393100191ba9958d734cd0d0f2.jpg",
    "https://i.pinimg.com/564x/68/f1/91/68f191a99ad7627f69e4c9a7f2fe66f7.jpg",
    "https://i.pinimg.com/564x/90/78/78/9078780616e015bf4afcafa1e979eec9.jpg",
    "https://i.pinimg.com/564x/fb/6e/34/fb6e34e80ed8a0769e8cd08bd19b289a.jpg"
  ];

  return (
    <div 
    id="order"
    className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/58/c6/29/58c6290a49601366f248962eb0f9e8bb.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />

      <h1 className="font-bold text-4xl text-white z-10 relative">
        Most Requested Items
      </h1>
      <h2 className="text-3xl text-white z-10 relative">Order Now..!</h2>

      <section 
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img 
                src={productImages[index]}
                alt={`Product ${index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl" 
              />
              <div className="px-4 py-3 w-72">
                <span className="text-slate-500 mr-3 uppercase text-xs">Category</span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">Burger Name {index + 1}</p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">$149</p>

                  <del>
                    <p className="text-blue-800 cursor-auto ml-2">$199</p>
                  </del>

                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCardGrid;
