import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import Btn from "../Buttons/Btn";
import { FaLink } from "react-icons/fa";
import "./Project.css";
const Project = () => {
  return (
    <>
      <h1 className="Projecthead">My Work</h1>
      <div className="projects">
        <ImageCard
          src="Expense.jpg"
          title="Expense Tracker"
          details="Discover my expense tracker project utilizing Java, MySQL, and Hibernate. This application efficiently manages expenses, demonstrating my expertise in backend development and database integration for financial tracking solutions."
          gitcode="https://github.com/SurajDubey14/Mulya-Expense-Manager-"
          LinkICon={<FaLink />}
        />
        <ImageCard
          src="Hotel.jpg"
          title="Hotel Management System"
          details="Explore my Java-based hotel management command-line project, featuring modular functionalities for room booking, guest management, and billing. Demonstrates proficiency in Java development and effective solutions for hospitality operations."
          gitcode="https://github.com/SurajDubey14/Hotel-Management-System"
          LinkICon={<FaLink />}
        />
        <ImageCard
          src="Clothing.jpg"
          title="Clothing"
          details="Developed a clothing brand webpage using Firebase and React, demonstrating strong skills in frontend design and backend development. The project features efficient user registration, dynamic product listings, and seamless data management for an optimal shopping experience."
          gitcode="#"
          LinkICon={<FaLink />}
        />
        <ImageCard
          src="NexGen.jpg"
          title="NexGen University"
          details="Uses Firebase with HTML, CSS, and JavaScript to enhance user registration and data management for NexGen University, a top global institution. Demonstrates expertise in frontend and backend development, ensuring smooth user interaction and efficient data handling."
          gitcode="https://nexgenuniversity.vercel.app/"
          LinkICon={<FaLink />}
        />
        <ImageCard
          src="WebBizz.jpg"
          title="Web-bizz"
          details="Developed web pages for Web Bizz, focusing on web design and SEO optimization. Demonstrated expertise in crafting user-friendly interfaces, applying effective SEO strategies, and ensuring smooth data integration to enhance online performance."
          gitcode="https://github.com/SurajDubey14/Web-bizz"
          LinkICon={<FaLink />}
        />
        <ImageCard
          src="Calculator.jpg"
          title="Calculator"
          details="Developed a dynamic calculator using HTML, CSS, and JavaScript, featuring a sleek, user-friendly interface. Implemented arithmetic operations with real-time input validation, demonstrating strong skills in front-end development and problem-solving."
          gitcode="https://github.com/SurajDubey14/Calculator.git"
          LinkICon={<FaLink />}
        />
      </div>
      <div className="Pbtn">
        <Btn
          type="submit"
          text="Get More"
          link="https://github.com/SurajDubey14"
        />
      </div>
    </>
  );
};

export default Project;
