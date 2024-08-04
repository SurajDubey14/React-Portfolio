import React from "react";
import "./Introduction.css";
import Contact from "../Contact/Contact";
import Btn from "../Buttons/Btn";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Introduction = () => {
  const navigation = useNavigate();
  const Navigate = () => {
    navigation("/Contact");
  };

  return (
    <>
      <section className="intro">
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 20 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          className="text"
        >
          Frontend Developer
          <div className="mydata">
            Hi, My name is <span> Suraj Dubey</span> <br /> from India
          </div>
          <div className="media">
            <a
              href="https://www.linkedin.com/in/suraj-dubey-b83b15237/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bg3ALG04jQwCGj2AjLSfhYw%3D%3D"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/SurajDubey14" target="_blank">
              <TbBrandGithubFilled />
            </a>
            <a href="https://www.instagram.com/surajpandat_01/" target="_blank">
              <RiInstagramFill />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100011569590964"
              target="_blank"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="meet" onClick={Navigate}>
            <Btn type="submit" text="Contact-Me" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 20 }}
          transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
          className="IntroImage"
        >
          <img src="/bg.png" alt="" />
        </motion.div>
      </section>
    </>
  );
};

export default Introduction;
