import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VideoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch(`https://68ea2a2cf1eeb3f856e66c4e.mockapi.io/youtube/${id}`)
      .then((res) => res.json())
      .then(setVideo)
      .catch((err) => console.error("Error loading video:", err));
  }, [id]);

  if (!video) {
    return <p className="text-gray-400 p-6">Loading video details...</p>;
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-600 rounded-lg shadow-md overflow-hidden">
        <img
          src={video.avatar}
          alt={video.description}
          className="w-full h-72 object-cover"
        />
        <div className="p-5">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {video.description}
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mb-3">
            Uploaded by <span className="font-medium">{video.personname}</span>
          </p>
          <p className="text-sm text-gray-400">
            {video.views} views • ID: {video.id}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
