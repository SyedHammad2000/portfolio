import React from "react";
import style from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={`${style.container} `}>
      <div className={`${style.c_screen} `}>
        <div className={`${style.box1}`}>
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>
        <div className={`${style.box2} row`}>
          <div className={`${style.col_1} col-md-6`}>
            <div className={`${style.info}`}>
              <h6>
                <span>Address_</span>Karachi, Pakistan
              </h6>
              <h6>
                <span>Phone_</span>03452891465
              </h6>
              <h6>
                <span>Email_</span>Hammadimran736@gmail.com
              </h6>
            </div>
          </div>
          <div className={`col-md-6`}>
            <div className={`${style.inputs}`}>
              <input
                type="text"
                className={`${style.inp}`}
                placeholder="Name"
              />
              <textarea
                className={`${style.textarea}`}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className={`btn btn-dark`}>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
