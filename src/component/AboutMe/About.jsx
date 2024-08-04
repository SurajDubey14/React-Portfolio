import React from "react";
import "./About.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <section className="about">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 25 }}
          transition={{ ease: "easeIn", duration: 1.5 }}
          className="image"
        >
          <img className="aboutimage" src="/about.jpeg" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 25 }}
          transition={{ ease: "easeIn", duration: 1.5 }}
          className="about-text"
        >
          <h2 className="Abouthead">About Me</h2>
          <p>
            As a passionate content creator on YouTube, I share my expertise in
            coding and software development, offering insights and tutorials to
            help fellow enthusiasts navigate the ever-evolving world of
            technology. With a background as a professional full-stack developer
            in the industry, I bring real-world experience to my engaging
            content. Committed to continuous learning and fostering a community
            of learners, I aim to make complex coding concepts accessible and
            enjoyable. Join me on this journey of exploration and mastery in the
            dynamic field of software development!
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default About;
