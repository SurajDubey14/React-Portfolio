import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
const Card = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ ease: "easeIn", duration: 1 }}
        whileHover={{ translateY: -20 }}
        className="card"
      >
        <img src={props.src} alt="" />
        <p className="icon">{props.icon}</p>
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description}</p>
        <p className="more">{props.more}</p>
      </motion.div>
    </>
  );
};

export default Card;
