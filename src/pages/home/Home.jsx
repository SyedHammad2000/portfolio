import React from "react";
import style from "./home.module.scss";
import image from "../../assets/image_1.png";
import MyServices from "../services/MyServices";
import Contact from "../contact/Contact";
import Project from "../project/Project";

const Home = () => {
  return (
    <>
      <div className={`${style.div_row} row p-3`}>
        <div
          className={`${style.color} col-lg-6 col-md-6 col-sm-12 flex-column justify-content-center align-content-center`}
        >
          <p>Hello Welcome</p>
          <h3>I'm Hammad Imran</h3>
          <p>
            I'm a passionate MERN Stack Developer with experience in building
            dynamic, scalable, and user-friendly web applications. I specialize
            in React.js, Next.js, Node.js, and MongoDB, creating seamless
            frontend experiences and efficient backend solutions. With a strong
            focus on performance, security, and real-time features, I integrate
            technologies like Redux Toolkit, WebSockets, and Stripe API to
            enhance functionality. Always eager to learn and grow, I aim to
            build impactful digital solutions
          </p>
          <button className={`btn btn-dark`}>Contact Us</button>
        </div>
        <div className={`${style.sec_1} col-lg-6 col-md-12 col-sm-12`}>
          <div
            className={``}
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt=""
              srcset=""
              height={"300px"}
              width={""}
              style={{}}
            />
          </div>
        </div>
      </div>
      <section id="section1">
        <MyServices />
      </section>
      <section id="section2">
        <Project />
      </section>
      <section id="section3">
        <Contact />
      </section>
    </>
  );
};

export default Home;
