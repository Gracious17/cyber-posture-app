"use client";
// import { setInterval } from "node:timers/promises";
import React from "react";
import GradButton from "@/components/buttons/GradButton";
import BlackButton from "./buttons/BlackButton";
const Test = () => {
  // const [heroText, setHeroText] = useState("Secured .");
  // useEffect(() => {
  //   setInterval(() => {
  //     return;
  //     setHeroText("");
  //   }, 3000);
  // });
  return (
    <div className="relative   w-[100vw]  h-[878.31px]   flex items-center justify-center bg-lit-bg ">
      {/* Add grid pattern and radial glow */}
      <div className="absolute inset-0 bg-radial-glow ">
        <div className="absolute   "></div>
      </div>

      {/*  Main Content  */}
      <div className="z-10 text-center">
        {/*  Glowing Text  */}
        <p>let&apos;s help you stay</p>
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/100 tracking-wide ">
          {/* {heroText} */}
          Secured.
        </h1>
        <p className="text-white text-lg mt-4 ">
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

export default Test;
