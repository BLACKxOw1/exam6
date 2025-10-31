import React from "react";
import { useNavigate } from "react-router-dom";

function CourseAPIreact() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Sliders",
      desc: "Go to Sliders API page",
      url: "https://www.course-api.com/slides.html",
      type: "external",
    },
    {
      id: 2,
      title: "Course API Products",
      desc: "View all products from Course API",
      path: "/course-products",
      type: "internal",
    },
    {
      id: 3,
      title: "React Store Single Product",
      desc: "Explore single product details",
      path: "/single-product",
      type: "internal",
    },
    {
      id: 4,
      title: "Tours Project",
      desc: "Explore tours project API data",
      path: "/tours",
      type: "internal",
    },
  ];

  const handleClick = (card) => {
    if (card.type === "external") {
      window.open(card.url, "_blank");
    } else {
      navigate(card.path);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        📘 Course API Projects
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className="cursor-pointer bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition p-6"
          >
            <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">
              {item.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseAPIreact;
