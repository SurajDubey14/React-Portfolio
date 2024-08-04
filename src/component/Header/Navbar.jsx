import React, { useState } from "react";
import Btn from "../Buttons/Btn";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { easeIn, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  // const [CloseMenu, setCloseMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const hidemenu = () => {
    setMenuOpen((prev) => !prev);
  };
  function hello() {
    console.log("Hello");
  }
  return (
    <>
      <header>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
          className="logo"
        >
          <Link to="/">CodeWithSuraj</Link>
        </motion.div>
        <div className={menuOpen ? "menu " : "menu menubar"}>
          <div className="nav">
            <nav>
              <motion.ul>
                <li
                // initial={{ x: -50 }}
                // animate={{ x: 50 }}
                // transition={{ duration: 1 }}
                >
                  <Link className="Link" to="/About" onClick={hidemenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/Services" onClick={hidemenu}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/Projects" onClick={hidemenu}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/Contact" onClick={hidemenu}>
                    Contact
                  </Link>
                </li>
              </motion.ul>
            </nav>
          </div>
          <div className="button">
            <Btn
              className="headerBtn"
              text="Download Resume"
              link="/MainResume.pdf"
            />
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <GiHamburgerMenu /> : <ImCross />}
        </div>
      </header>
    </>
  );
};

export default Navbar;
