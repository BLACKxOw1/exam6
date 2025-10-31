import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MockAPI() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://68ea2a2cf1eeb3f856e66c4e.mockapi.io/youtube")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("MockAPI error:", err));
  }, []);

  const filteredVideos = videos.filter(
    (item) =>
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.personname.toLowerCase().includes(search.toLowerCase())
  );

  if (!videos || videos.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-400 text-lg">
        Loading videos...
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          MockAPI YouTube Videos
        </h1>

        <input
          type="text"
          placeholder="Search videos or creators..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg
                     bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {filteredVideos.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVideos.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/video/${item.id}`)}
              className="cursor-pointer bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={item.avatar}
                  alt="video thumbnail"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {item.views} views
                </span>
              </div>

              <div className="flex items-start gap-3 p-3">
                <img
                  src={item.personavatar}
                  alt="person"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                    {item.description}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.personname}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          No videos found matching "{search}"
        </p>
      )}
    </div>
  );
}

export default MockAPI;
