import React from "react";
import GlideBox from "./GlideBox";

const ServicesOverview = () => {
  return (
    <div className="w-full items-center justify-center text-center ">
      <div className="items-center  justify-center  text-center w-full pt-12  pb-6 bg-lit-bg ">
        <div>
          <p className="font-normal tracking-widest text-sm   items-center text-customBlue pb-5 uppercase">
            What We Offer
          </p>
        </div>
        <div className=" items-center justify-center text-center w-[100%]  ">
          <h2 className="  text-2xl font-bold">
            <span className="bg-[linear-gradient(to_right,rgba(54,55,160,1),rgba(9,198,222,1),rgba(70,3,137,1))]  bg-clip-text text-transparent">
              We Provide Expert CyberSecurity Solutions
            </span>
            <br />
            Tailored To Your Unique Needs, Ensuring
            <br />
            Compliance And Robust Protection Against
            <br />
            Emerging Threats
          </h2>
        </div>
        {/* Y-axis Gliding Boxes */}
        <div className="w-full  pt-10">
          <GlideBox />
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
