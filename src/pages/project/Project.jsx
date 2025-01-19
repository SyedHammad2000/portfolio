import React from "react";
import style from "./myservices.module.scss";
import image3 from "../../assets/Vector_3.png";
import prj1 from "../../assets/prj1.png";
import prj2 from "../../assets/prj2.png";
import prj3 from "../../assets/prj3.png";
const Project = () => {
  const boxes = [
    {
      id: 1,
      title: "Job",
      title2: "Portal",
      image: prj1,
      link: "https://bestfinder.netlify.app/",
    },
    {
      id: 2,
      title: "Ecom",
      title2: "Web",
      image: prj2,
      link: "https://24-hourshop.vercel.app/",
    },
    {
      id: 3,
      title: "Responsive",
      title2: "Web",
      image: prj3,
      link: "https://travelagency5000.netlify.app/",
    },
  ];
  return (
    <div className={`${style.container} `}>
      <div
        className={`${style.myservice} d-flex p-1 p-md-1 flex-column  flex-md-column`}
      >
        <div className={`${style.service} desc`}>
          <h2>
            My <span>Project </span>
          </h2>
        </div>

        <div
          className={`${style.boxes} d-flex justify-content-center flex-column flex-lg-row flex-md-column pb-2 `}
        >
          {boxes?.map((item, ind) => {
            return (
              <div key={item.id} className="gap-4 rounded-4">
                <a href={item.link}>
                  <img
                    src={item.image}
                    srcSet={""}
                    height={"100px"}
                    alt={item.title}
                  />
                </a>
                <h3 className=" ">
                  {item.title}
                  <br />
                  {item.title2}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
