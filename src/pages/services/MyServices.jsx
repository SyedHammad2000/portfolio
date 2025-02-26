import React from "react";
import style from "./myservices.module.scss";
import image1 from "../../assets/Vector.png";
import image2 from "../../assets/Vector_2.png";
import image3 from "../../assets/Vector_3.png";
const MyServices = () => {
  const boxes = [
    {
      id: 1,
      title: "Digital",
      title2: " Marketing",
      image: image1,
    },
    {
      id: 2,
      title: "Web ",
      title2: "Development",
      image: image2,
    },
    {
      id: 3,
      title: "Creative ",
      title2: "Graphic Design",
      image: image3,
    },
  ];
  return (
    <div className={`${style.container} `}>
      <div
        className={`${style.myservice} d-flex p-1 p-md-1 flex-column  flex-md-column`}
      >
        <div className={`${style.service} desc`}>
          <h2>
            My <span>Services </span>
          </h2>
          <p>
            I build scalable MERN stack applications with React.js, Next.js,
            Node.js, and MongoDB, ensuring seamless UI/UX, secure
            authentication, real-time features, API integrations, and smooth
            deployments on Netlify, Vercel, and AWS{" "}
          </p>
        </div>

        <div
          className={`${style.boxes} d-flex justify-content-center flex-column flex-lg-row flex-md-column pb-2 `}
        >
          {boxes?.map((item, ind) => {
            return (
              <div key={item.id} className="gap-4 rounded-4">
                <img src={item.image} srcSet={""} alt={item.title} />
                <h3 className=" ">
                  {item.title}
                  <br />
                  {item.title2}
                </h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
