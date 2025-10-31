import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const links = [
  { name: "Course API", path: "/" },
  { name: "ReqRes", path: "/reqres" },
  { name: "FakeStore", path: "/fakestore" },
  { name: "DummyJSON", path: "/dummyjson" },
  { name: "MockAPI", path: "/mockapi" },
  { name: "JSONPlaceholder", path: "/jsonplaceholder" },
];

function Sidebar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgColor = isDark ? "bg-zinc-900 text-white font-medium" : "bg-gray-200 text-gray-900 font-medium";
  const activeColor = isDark ? "bg-zinc-700" : "bg-gray-300";
  const hoverColor = isDark ? "hover:bg-zinc-800" : "hover:bg-gray-300";

  return (
    <div className={`w-64 ${bgColor} p-5 flex flex-col gap-2 transition-colors duration-300`}>
      <h1 className="text-2xl font-semibold mb-5">API Explorer</h1>
      {links.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg transition ${
              isActive ? activeColor : hoverColor
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
