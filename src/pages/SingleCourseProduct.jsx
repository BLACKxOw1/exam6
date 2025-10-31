import React, { useState } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

function SingleCourseProduct() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: "recZkNf2kwmdBcqd0",
    name: "Accent Chair",
    price: 25999,
    image: "https://www.course-api.com/images/store/product-1.jpeg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "Marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal.",
    category: "office",
    shipping: true,
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      color: selectedColor,
      price: product.price / 100,
      quantity: 1,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-zinc-700 rounded-xl shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {product.name}
            </h1>
            <p className="text-blue-600 dark:text-blue-400 text-xl font-medium mb-3">
              ${(product.price / 100).toFixed(2)}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {product.description}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Company: <span className="font-medium">{product.company}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Category: <span className="font-medium">{product.category}</span>
            </p>

            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Available Colors:
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      backgroundColor: color,
                      border:
                        selectedColor === color
                          ? "3px solid #000"
                          : "2px solid transparent",
                    }}
                    className="w-8 h-8 rounded-full cursor-pointer transition-all"
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCourseProduct;
