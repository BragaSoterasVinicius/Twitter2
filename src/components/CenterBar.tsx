import { useState } from "react";
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
      <div className="block" id="top">
        {" "}
        <h3 style={{ marginLeft: "10px", marginTop: "5px" }}>Página inicial</h3>
      </div>
      <div id="scrollabe">
        <PostInput onAddPost={addPost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}
export default CenterBar;
