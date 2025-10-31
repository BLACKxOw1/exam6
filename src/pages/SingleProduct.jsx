import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(
      "https://www.course-api.com/react-store-single-product?id=rec1Ntk7siEEW9ha1"
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.images?.[0]?.url || "");
      });
  }, []);

  if (!product)
    return <p className="text-gray-400 text-lg">Loading single product...</p>;

  const activeBorder = (url) =>
    url === mainImage ? "border-2 border-red-500" : "border border-transparent";

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      image: mainImage,
    };
    addToCart(itemToAdd);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-6 bg-white dark:bg-zinc-800 rounded-lg p-4 shadow">
        <div className="md:w-1/2">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg mb-3 transition-all"
          />

          <div className="flex gap-3 flex-wrap">
            {product.images?.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt={img.filename}
                onClick={() => setMainImage(img.url)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition ${activeBorder(
                  img.url
                )}`}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {product.name}
            </h1>
            <p className="text-blue-600 dark:text-blue-400 text-lg mb-3">
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
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
