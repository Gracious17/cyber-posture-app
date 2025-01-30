import Image from "next/image";
import React from "react";
import nameLogo from "../../public/Layer_1.png";
import GradButton from "./buttons/GradButton";
const Navbar = () => {
  return (
    <div className="h-14 bg-custom-gradient text-white">
      <div className="flex justify-around items-center pt-3">
        <Image
          src={nameLogo}
          alt="name "
          width={100}
          height={20}
          className="pt-2 text-white"
        />

        <ul className="flex flex-row  gap-3 text-[10px] font-semibold">
          <li className="hover:bg-radial-glow  p-2 rounded-full cursor-pointer">
            Services
          </li>
          <li className="hover:bg-radial-glow  p-2 rounded-full cursor-pointer ">
            About
          </li>
          <li className="hover:bg-radial-glow  p-2 rounded-full cursor-pointer ">
            Contact us
          </li>
        </ul>
        <div className="hidden  md:flex">
          <GradButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
