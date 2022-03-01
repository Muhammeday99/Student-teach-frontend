import React from "react";
import "./styles/design.css";

const DBDesign = () => {
  return (
    <div className="container max-width-1100">
      <div className="dbdesign-image-container">
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FBgzkJXIbLl5xW1QTIDbd08%2FDatabase-Structure"
          allowfullscreen
        ></iframe>
      </div>
      <div className="left">
        <h1>Our Database Structure</h1>
        <span>Designed to handle data in the best way.</span>
      </div>
    </div>
  );
};

export default DBDesign;
