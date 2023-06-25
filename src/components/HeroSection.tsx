//import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
//import AboutPage from "../pages/AboutPage";

const HeroSection: FC = () => {
  return (
    <div className="flex flex-items column items-center w-[1111px] h-[640]">
      <h1>HeroSection</h1>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </h3>
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default HeroSection;
