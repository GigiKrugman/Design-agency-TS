import { FC } from "react";
import HeroSection from "../components/HeroSection";
import CardLink from "../components/CardLink";
import quality from "../data";
import Footer from "../components/Footer";
const HomePage: FC = () => {
  return (
    <div>
      <HeroSection />
      <div className="flex justify-between mx-auto w-[1112px] h-[640px]">
        <CardLink
          imagePath={"/assets/home/desktop/image-web-design-large.jpg"}
          linkPath="/web-design"
          text="Web Design"
          className="w-[541px] h-[640px]"
        />
        <div className="flex flex-col justify-between w-[541px] h-[640px]">
          <CardLink
            imagePath={"/assets/home/desktop/image-app-design.jpg"}
            linkPath="/app-design"
            text="App Design"
            className="h-[308px]"
          />

          <CardLink
            imagePath={"/assets/home/desktop/image-graphic-design.jpg"}
            linkPath="/graphic-design"
            text="Graphic Design"
            className="h-[308px]"
          />
        </div>
      </div>
      <div className="flex flex-items row space-between gap-9">
        {quality.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} />
              <h3>{item.text}</h3>
              <p>{item.subtext}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
