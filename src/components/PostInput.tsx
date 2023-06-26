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
            }}
          >
            <div style={{ display: "inline-flex", width: "100%" }}>
              <div style={{ width: "100%" }}>icons</div>
              <></>
              <button onClick={handleSubmit} style={{ width: "100%" }}>
                post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostInput;
