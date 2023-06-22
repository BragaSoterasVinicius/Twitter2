import React from "react";
import "./styles/side.css";

function CenterBar() {
  return (
    <div id="middle">
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
          <input
            type="text"
            placeholder="O que está acontecendo???"
            style={{ height: "100%" }}
          ></input>
          <div
            className="block"
            style={{
              width: "100%",
              position: "absolute",
              bottom: "0",
              textAlign: "right",
            }}
          >
            <div
              className="block"
              style={{
                width: "22%",
                marginLeft: "78%",
              }}
            >
              post
            </div>
          </div>
        </div>
      </div>
      <div className="block">Posts deverao estar aqui dentro</div>
    </div>
  );
}
export default CenterBar;
