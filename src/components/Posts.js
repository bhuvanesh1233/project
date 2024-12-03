import React, { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Store data in state
        setLoading(false); // Stop loading indicator
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="posts">
      <h2>Posts</h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
