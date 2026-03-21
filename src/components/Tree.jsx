// src/components/Tree.jsx
import React from "react";
import "./Tree.css";

export default function Tree({
  foliageColor = "green",

}) {
  return (
    <div className="tree" role="img" aria-label="Stylized tree">
      <div
        className="foliage"
        style={{
          backgroundColor: foliageColor,
      
          
        }}
      ></div>
      <div className="trunk"></div>
    </div>
  );
}
