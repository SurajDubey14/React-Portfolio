import React from "react";
import Card from "../card/Card";
import "./Service.css";
import { FaLaptopHouse } from "react-icons/fa";
import { IoCrop } from "react-icons/io5";
import { SiAffinitydesigner } from "react-icons/si";
import { GrHtml5 } from "react-icons/gr";
import { FaReact, FaBootstrap, FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
const Service = () => {
  return (
    <>
      <h1 className="Servicehead">Services</h1>
      <div className="service">
        <Card
          className="cards "
          icon={<FaLaptopHouse />}
          title={"Web Designer"}
          description={
            "I provide top-notch web development services tailored to your needs. From sleek front-end designs to robust back-end functionality, I specialize in creating user-friendly and responsive websites. Whether it's building from scratch or enhancing existing sites, I'm here to elevate your online presence with cutting-edge technology and a touch of creativity."
          }
          more={"Read More"}
        />
        <Card
          className="cards "
          icon={<IoCrop />}
          title={"UI/UX Design"}
          description={
            "Specializing in top-tier UI/UX design, I create visually captivating interfaces that prioritize user experience. From wireframes to prototypes, I bring concepts to life with seamless navigation and engaging interactions. Leveraging deep insights into user behavior and industry trends, I craft designs that elevate digital presence with intuitive, aesthetically pleasing solutions. Let's collaborate to enhance your digital product's usability and appeal."
          }
          more={"Read More"}
        />
        <Card
          className="cards "
          icon={<SiAffinitydesigner />}
          title={"Graphic Designer"}
          description={
            "As a graphic designer, I specialize in creating visually striking designs tailored to your brand's identity. With expertise in various mediums, I ensure your brand stands out across platforms. By blending creativity with the latest trends, I craft engaging experiences that resonate with your audience. Let's collaborate to elevate your brand's visual identity and leave a lasting impression. Together, we'll transform your ideas into captivating designs that set your brand apart."
          }
          more={"Read More"}
        />
      </div>

      <h1 className="skillshead">Skill</h1>
      <div className="skillset">
        <div className="skill">
          <div className="skillicon">
            <GrHtml5 />
          </div>
          <div className="skilltitle">HTML</div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <IoLogoCss3 />
          </div>
          <div className="skilltitle">CSS</div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <IoLogoJavascript />
          </div>
          <div className="skilltitle">JavaScript</div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <FaBootstrap />
          </div>
          <div className="skilltitle">BootStrap</div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <FaReact />
          </div>
          <div className="skilltitle">React</div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <FaJava />
          </div>
          <div className="skilltitle">Java</div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <FaNodeJs />
          </div>
          <div className="skilltitle">NodeJs</div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <GrMysql />
          </div>
          <div className="skilltitle">My-sql</div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <SiMongodb />
          </div>
          <div className="skilltitle">Mongodb</div>
        </div>
      </div>
    </>
  );
};

export default Service;
