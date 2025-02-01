import React from "react";
import GradButton from "@/components/buttons/GradButton";
import BlackButton from "./buttons/BlackButton";
import HeroHeader from "./HeroHeader";
const Hero = () => {
  return (
    <div className="relative   w-[100vw]  h-[800px]   flex items-center justify-center bg-lit-bg ">
      {/* Add grid pattern and radial glow */}
      <div className="absolute inset-0 bg-radial-glow ">
        {/* <div className="absolute   "></div> */}
      </div>
      {/*  Main Content  */}
      <div className="z-10 text-center items-center justify-center">
        {/*  Glowing Text  */}
        <p className="text-3xl uppercase tracking-widest">
          let&apos;s help you stay
        </p>
        {/* Hero Header component */}
        <HeroHeader />
        <p className="text-white text-lg mt-4 mx-auto">
          Expert Cybersecurity Solutions Tailored to Protect <br /> Your
          Organization from Emerging Threats
        </p>

        {/*  Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <GradButton />
          <BlackButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
