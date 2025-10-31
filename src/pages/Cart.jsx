import React from "react";
import { useCart } from "../CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <p className="text-gray-500 dark:text-gray-300 text-lg text-center pb-8">
          Cart hali bo‘sh
        </p>
        <div class="flex-col gap-4 w-full flex items-center justify-center">
          <div
            class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
          >
            <div
              class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            ></div>
          </div>
        </div>

      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Cart laringiz
      </h1>

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white dark:bg-zinc-700 p-4 rounded-lg shadow justify-between"
          >
            <img
              src={item.thumbnail || item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded mr-4"
            />

            <div className="flex-1">
              <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                {item.description}
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  item.quantity > 1
                    ? updateQuantity(item.id, item.quantity - 1)
                    : removeFromCart(item.id)
                }
                className="bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
              >
                −
              </button>

              <span className="text-lg font-medium text-gray-800 dark:text-gray-100 w-6 text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Total: ${total.toFixed(2)}
        </h2>

        <button
          onClick={clearCart}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          Cart ni tozalash
        </button>
      </div>
    </div>
  );
}

export default Cart;
