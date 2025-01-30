"use client";
import React, { useEffect, useState } from "react";

const HeroHeader = () => {
  const [isFisrt, setIsFirst] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirst((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <h1 className=" text-6xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/100 tracking-wide ">
      {/* {heroText} */}
      {isFisrt ? "Secured." : "Protected."}
    </h1>
  );
};

export default HeroHeader;
