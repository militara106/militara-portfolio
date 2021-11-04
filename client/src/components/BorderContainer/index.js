import React from "react";
import "./style.css";

function BorderContainer(props) {
  return (
      <div className="borderContainer">
        <div className="mainText">{props.children}</div>
      </div>
  );
}

export default BorderContainer;
