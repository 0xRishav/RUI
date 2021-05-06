import React from "react";
import "./Image.css";

function Image({ type }) {
  return (
    <div className="Image">
      <img
        className={type}
        src="https://images.unsplash.com/photo-1506499984411-860f50ae4acb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        alt="image"
      />
      <h3>{type} Image</h3>
    </div>
  );
}

export default Image;
