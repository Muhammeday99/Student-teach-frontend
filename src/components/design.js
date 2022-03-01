import React from "react";
import "./styles/design.css";

const SysDesign = () => {
  return (
    <div>
      <div className="design-header left">
        <h1 className="design-title">Our System Design</h1>
      </div>
      <div>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="75%"
          height="650"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNCGmFkvvEq00ZLgalAsrB3%2FSystem-Design%3Fnode-id%3D0%253A1"
        ></iframe>
      </div>
    </div>
  );
};

export default SysDesign;
