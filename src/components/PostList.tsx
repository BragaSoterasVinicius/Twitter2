import "./styles/side.css";
function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="block">
          <div
            style={{
              display: "inline-flex",
              height: "40px",
              width: "100%",
            }}
          >
            <div className="block">foto</div>
            <div className="block" style={{ width: "100%" }}>
              nome
            </div>
          </div>
          {post}
          <div>Like compartilhar comentar</div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
