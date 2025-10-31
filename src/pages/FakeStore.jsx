import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext";

function FakeStore() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Fake Store Products
        </h1>
        <input
          type="text"
          placeholder=" Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 dark:border-zinc-600 rounded-md px-4 py-2 w-full sm:w-64 dark:bg-zinc-700 dark:text-white"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-zinc-700 rounded-lg shadow p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain rounded-md mb-3"
            />
            <h2 className="font-bold text-lg dark:text-gray-100 line-clamp-1">
              {item.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
              {item.description}
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
              ${item.price}
            </p>
            <button
              onClick={() => addToCart(item)}
              className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FakeStore;
