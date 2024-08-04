import React from "react";
import "./ImageCard.css";

import { FaLink } from "react-icons/fa";
const ImageCard = (props) => {
  return (
    <div className="ImageCard">
      <img src={props.src} alt="" />
      <div className="desc">
        <p className="title">{props.title}</p>
        <p className="ImageDetails">{props.details}</p>
        <p className="IconLink"><a href={props.gitcode} target="_blank">{props.LinkICon}</a></p>
      </div>
    </div>
  );
};

export default ImageCard;
