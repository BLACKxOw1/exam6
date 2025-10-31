import React, { useEffect, useState } from 'react';

function JSONPlaceholder() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        JSONPlaceholder Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-zinc-700 rounded-lg shadow p-4 cursor-pointer"
          >
            <h2 className="font-bold text-lg dark:text-gray-100 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JSONPlaceholder;
