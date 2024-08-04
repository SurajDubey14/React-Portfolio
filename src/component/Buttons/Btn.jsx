import React from "react";
import "./Btn.css";
const Btn = (props) => {
  return (
    <button className="btn" type={props.type}>
      <a target="_blank" href={props.link}>
        {props.text}
      </a>
    </button>
  );
};

export default Btn;
