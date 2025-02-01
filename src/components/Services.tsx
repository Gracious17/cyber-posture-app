import React from "react";
import GlideText from "./GlideText";
import Image from "next/image";
import container from "../../public/Container.png";
import Tools from "./Tools";

const Services = () => {
  return (
    <div className="relative w-full  flex flex-col items-center justify-center  bg-glowing-dark">
      {/* Add grid pattern and radial glow */}
      <div className="absolute  bg-glowing-dark  ">
        {/* <div className="absolute inset-0 bg-grid-pattern bg-grid-size"></div> */}
      </div>

      {/* section Text  */}
      <div className="items-center justify-center  text-center w-full ">
        <div className="pt-2">
          <p className="font-normal tracking-widest text-sm  font-sans items-center text-customBlue pb-5">
            CATERING FOR ALL INDUSTRIES
          </p>
        </div>
        <div>
          {/*  X-axis Gliding  Text */}
          <GlideText />
        </div>
      </div>
      {/* organizations that trust us */}
      <div className="items-center  justify-center  text-center w-full pt-12 ">
        <div>
          {" "}
          <p className="font-normal tracking-widest text-sm  font-sans items-center text-customBlue pb-5 uppercase">
            organizations that trust us
          </p>
        </div>
        <div className=" items-center justify-center text-center w-[100%]">
          <Image
            src={container}
            width={900}
            height={90}
            alt="organizations"
            className="mx-auto"
          />
        </div>
      </div>
      {/* how we work */}
      <div className="items-center  justify-center  text-center w-full pt-12 ">
        <div>
          {" "}
          <p className="font-normal tracking-widest text-sm   items-center text-customBlue pb-5 uppercase">
            How We Work
          </p>
        </div>
        <div className=" items-center justify-center text-center w-[100%]">
          <h2 className="  text-3xl font-bold">
            <span className="bg-[linear-gradient(to_right,rgba(54,55,160,1),rgba(9,198,222,1),rgba(70,3,137,1))]  bg-clip-text text-transparent">
              We Ensure Your Organizaton Is Protected
            </span>
            <br />
            Against Evolving Threats And Meets All
            <br />
            Regulatory Requirements
          </h2>
        </div>
      </div>
      {/* box layouts */}
      <div className="py-12">
        <Tools />
      </div>
    </div>
  );
};

export default Services;
