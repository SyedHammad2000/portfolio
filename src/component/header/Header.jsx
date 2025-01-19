import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <div className="">
      <div className={style.nav}>
        <h4 className="text-white">
          About<span>Me</span>
        </h4>
        <ul className={style.ul}>
          <li>
            <Scroll
              style={{ cursor: "pointer", color: "white" }}
              to={"section1"}
              duration={500}
            >
              Service
            </Scroll>
          </li>
          <li>
            <Scroll
              style={{ cursor: "pointer", color: "white" }}
              to={"section3"}
              duration={500}
            >
              Contact
            </Scroll>
          </li>
          <li>
            <Scroll
              style={{ cursor: "pointer", color: "white" }}
              to={"section2"}
              duration={500}
            >
              Projects
            </Scroll>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
