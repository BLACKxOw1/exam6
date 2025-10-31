import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SinglePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);
  }, [id]);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 dark:text-gray-300">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-700 rounded-xl shadow p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back
      </button>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          ID:
        </span>
        <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
          {post.id}
        </span>
      </div>

      <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {post.body}
      </p>
    </div>
  );
}

export default SinglePost;
