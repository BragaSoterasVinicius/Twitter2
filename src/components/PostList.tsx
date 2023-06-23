import React from "react";
import "./styles/side.css";
function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="block">
          {post}
        </div>
      ))}
    </div>
  );
}

export default PostList;
