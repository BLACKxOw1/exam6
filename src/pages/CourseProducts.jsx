import React, { useEffect, useState } from "react";

function CourseProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://course-api.com/react-store-products")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Course API Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-zinc-700 rounded-lg shadow p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h2 className="font-bold text-lg mb-1 dark:text-gray-100">
              {item.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {item.company}
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
              ${(item.price / 100).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseProducts;
