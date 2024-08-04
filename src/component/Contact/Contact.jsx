import React, { useState } from "react";
import "./contact.css";
import Btn from "../Buttons/Btn";
import { MdWifiCalling3, MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [data, setData] = useState();

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (event) => {
    setMsg(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const PortData = {
      name,
      email,
      msg,
    };

    fetch("https://portfolio-b062b-default-rtdb.firebaseio.com/.json", {
      method: "POST",
      body: JSON.stringify(PortData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        
        // Reset the input fields
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };


  return (
    <section className="contact">
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 20 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="data"
      >
        <h1 className="Contacthead">Contact-Me</h1>
        <div className="info">
          <div className="icon">
            <MdEmail />
          </div>
          <p>dubeysuraj1472002@gmail.com</p>
        </div>
        <div className="info">
          <div className="icon">
            <MdWifiCalling3 />
          </div>
          <p>9310745399</p>
        </div>
        <div className="media">
          <a
            href="https://www.linkedin.com/in/suraj-dubey-b83b15237/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bg3ALG04jQwCGj2AjLSfhYw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/SurajDubey14" target="_blank" rel="noopener noreferrer">
            <TbBrandGithubFilled />
          </a>
          <a href="https://www.instagram.com/surajpandat_01/" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100011569590964"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>
        <Btn
          className="button"
          text="Download Resume"
          link="/MainResume.pdf"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: 1, x: -2, y: 20 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="inputfield"
      >
        <form className="box" onSubmit={submitHandler}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          <textarea
            rows="10"
            value={msg}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            required
          ></textarea>
          <div className="button-group">
            <Btn className="Sbtn" type="submit" text="Submit" />
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
