import React from "react";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:">
        <div className="text-white text-center">
          <p className="text-sm">Copyright 2023. All rights reserved.</p>
        </div>
        <div className="d-flex justify-content-center align-content-center gap-2">
          <img src={facebook} alt="" srcset="" />
          <img src={linkedin} alt="" srcset="" />
          <img src={insta} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
