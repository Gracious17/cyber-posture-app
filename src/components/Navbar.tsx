import Image from "next/image";
import React from "react";
import nameLogo from "../../public/Layer_1.png";
import GradButton from "./buttons/GradButton";
const Navbar = () => {
  return (
    <div className="h-12 bg-custom-gradient text-white">
      <div className="flex justify-around items-center pt-3">
        <Image
          src={nameLogo}
          alt="name "
          width={100}
          height={20}
          className="pt-2 text-white"
        />

        <ul className="flex flex-row  gap-2 text-[10px] font-thin">
          <li className="">Services</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <GradButton />
      </div>
    </div>
  );
};

export default Navbar;
