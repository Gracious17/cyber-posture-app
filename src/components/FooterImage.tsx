import React from "react";

const FooterImage = () => {
  return (
    <div className="relative text-center w-full">
      {/* Main Text */}
      <span className="block text-6xl md:text-6xl sm:4xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-gradient-to-b from-gray-500 to-gray-800 bg-clip-text shadow-lg">
        CYBERPOSTURE
      </span>

      {/* Reflected Text */}
      <span className="absolute top-full left-0 right-0 text-6xl font-extrabold text-gray-500 opacity-10 scale-y-[-1]">
        CYBERPOSTURE
      </span>
    </div>
  );
};

export default FooterImage;
