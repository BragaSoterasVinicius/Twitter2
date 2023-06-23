import React, { useState } from "react";
import "./styles/side.css";
import PostInput from "./PostInput";
import PostList from "./PostList";

function CenterBar() {
  const [posts, setPosts] = useState([] as any);
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div id="middle">
      <PostInput onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}
export default CenterBar;
