import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";

import logoDark from "../assets/icons8-market-64 (2).png";
import logoLight from "../assets/icons8-market-64.png";
import cartDark from "../assets/icons8-cart-100 (1).png";
import cartLight from "../assets/icons8-cart-100.png";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-zinc-900" : "bg-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.15)] ";
  const textColor = isDark
    ? "text-gray-200 hover:text-gray-400"
    : "text-gray-800 font-medium hover:text-gray-600";
  const logo = isDark ? logoDark : logoLight;
  const cart = isDark ? cartDark : cartLight;

  const handleHomeClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div
      className={`w-full ${bgColor} top-0 z-50 transition-colors duration-300`}
    >
      <div className="w-[1450px] mx-auto py-4 flex items-center justify-between">
        <div className="cursor-pointer" onClick={handleHomeClick}>
          <img src={logo} alt="logo" className="w-12 h-11" />
        </div>

        <ul className="flex gap-14">
          <li
            onClick={handleHomeClick}
            className={`text-[18px] cursor-pointer ${textColor}`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/cart")}
            className={`text-[18px] cursor-pointer ${textColor}`}
          >
            Cart
          </li>
          <li
            onClick={() => navigate("/fakestore")}
            className={`text-[18px] cursor-pointer ${textColor}`}
          >
            Market
          </li>
          <li
            onClick={() => navigate("/dummyjson")}
            className={`text-[18px] cursor-pointer ${textColor}`}
          >
            Shop
          </li>
          <li
            onClick={() => navigate("/mockapi")}
            className={`text-[18px] cursor-pointer ${textColor}`}
          >
            Mock API
          </li>
          <li
            onClick={() => navigate("/jsonplaceholder")}
            className={`text-[18px] cursor-pointer ${textColor}`}
          >
            Posts
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={() => navigate("/cart")}>
            <img src={cart} alt="cart" className="w-11 h-11" />
          </div>

          <button
            onClick={toggleTheme}
            className={`px-3 py-1 rounded-xl border ${
              isDark
                ? "border-gray-500 text-gray-200"
                : "border-gray-400 text-gray-700"
            }`}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
