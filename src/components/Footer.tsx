import React from "react";
import GradButton from "../components/buttons/GradButton";
import FooterImage from "./FooterImage";
const Footer = () => {
  return (
    <div className="w-full bg-lit-bg text-white text-center p-5 h-[1200px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-semibold text-3xl tracking-widest">
          Get started. It&apos;s easy
        </h2>
        <p className="text-xs font-normal tracking-wide">
          Everything you need to remain cybersecurity complaint is <br /> just a
          call away
        </p>
        {/* btn  component*/}
        <GradButton />
      </div>
      <div className="w-full flex   h-[100px]">
        <FooterImage />
      </div>
    </div>
  );
};

export default Footer;
