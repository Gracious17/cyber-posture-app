import React from "react";
import GradButton from "../components/buttons/GradButton";
const Footer = () => {
  return (
    <div className="w-full bg-lit-bg text-white text-center p-5">
      <div>
        <h2>Get started. it&apos;s easy</h2>
        <p>
          Everything you need to remain cybersecurity complaint is just a call
          away
        </p>
        {/* btn  component*/}
        <GradButton />
      </div>
    </div>
  );
};

export default Footer;
