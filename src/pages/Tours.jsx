import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

function Tours() {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://www.course-api.com/react-tours-project")
      .then((res) => res.json())
      .then(setTours)
      .catch((err) => console.error("Tours API error:", err));
  }, []);

  const handleAddToCart = (tour) => {
    const item = {
      id: tour.id,
      title: tour.name,
      price: parseFloat(tour.price.replace(",", "")),
      image: tour.image,
      description: tour.info,
    };
    addToCart(item);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Tours Project
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white dark:bg-zinc-600 rounded-lg shadow p-4 flex flex-col justify-between transition hover:shadow-lg"
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />

            <div className="flex-1">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">
                {tour.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-2">
                {tour.info}
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                ${tour.price}
              </p>
            </div>

            <button
              onClick={() => handleAddToCart(tour)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;
