import React from "react";
import Introduction from "./component/Introduction/Introduction";
import Navbar from "./component/Header/Navbar";
import Service from "./component/Services/Service";
import Footer from "./component/Footer/footer";
import Contact from "./component/Contact/Contact";
import Project from "./component/Projects/Project";
import About from "./component/AboutMe/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <div className="bl"> */}
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Service />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          {/* <Footer /> */}
        {/* </div> */}
      </BrowserRouter>
    </>
  );
};
export default App;
