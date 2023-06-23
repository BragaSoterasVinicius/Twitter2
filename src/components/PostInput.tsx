import { useState } from "react";

function PostInput({ onAddPost }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue) {
      onAddPost(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <div className="block" style={{ textAlign: "left" }}>
        {" "}
        <h3>Página inicial</h3>
      </div>
      <div
        style={{ display: "inline-flex" }}
        className="blockPost"
        id="posting"
      >
        <div className="block">name</div>
        <div className="block" style={{ position: "relative" }}>
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="O que está acontecendo???"
            style={{ height: "100%", fontSize: "19px" }}
          ></textarea>
          <div
            className="block"
            style={{
              width: "100%",
              position: "absolute",
              bottom: "0",
              textAlign: "right",
            }}
          >
            <button onClick={handleSubmit} style={{ marginRight: "0%" }}>
              post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostInput;
