import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burgers</h2>
        <p className="text-white mb-4">
          Experience the juiciest burgers in town, made with fresh ingredients and grilled to perfection.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 mb-6">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mb-6 text-center text-white">
          Coming Soon: Our New Burger Launches
        </h3>
        <ul className="text-white list-disc list-inside mb-6">
          <li><strong>Cheesy BBQ Bacon Burger:</strong> A mouthwatering blend of cheddar cheese, crispy bacon, and BBQ.</li>
          <li><strong>Buffalo Chicken Burger:</strong> Crispy chicken breast tossed in spicy buffalo sauce.</li>
          <li><strong>Avocado Veggie Burger:</strong> A delicious plant-based option featuring a grilled veggie patty.</li>
          <li><strong>Mushroom Swiss Burger:</strong> Juicy beef patty melted Swiss cheese for a rich, savory taste.</li>
          <li><strong>Spicy Jalapeño Burger:</strong> A fiery delight topped with fresh jalapeños and zesty chipotle mayo.</li>
        </ul>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://media.istockphoto.com/id/165793418/vector/seamless-fast-food-background.jpg?s=612x612&w=0&k=20&c=sGOXCqnJYG3fgQ1UKF3Sgzlm_c0T7UbjD4BAwF_hWY4="
          alt="Delicious Burger"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
