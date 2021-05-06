import React from "react";
import { Image } from "../../components";
import "./Images.css";

function Images() {
  return (
    <div className="ImagesContainer container">
      <h2>Images</h2>
      <div className="component-wrapper">
        <Image type="Responsive" />
        <Image type="Rounded" />
      </div>
    </div>
  );
}

export default Images;
