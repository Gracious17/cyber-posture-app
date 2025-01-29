import React from "react";
const Hero = () => {
  return (
    // dark:bg-black
    <div className=" w-full dark:bg-dark  bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" relative bg-[radial-gradient(circle,_rgba(255,255,250,0.1)_0%_transparent_80%)]">
        <div className=" absolute  inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.1)_1px,_transparent_1px)]"></div>
      </div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>

    // <div className="text-center items-center justify-center">
    //   <div>
    //     <h3>let&apos;s help you stay </h3>
    //     <div className="items-center justify-center text-center flex">
    //       <h1 className="text-[70px] font-bold bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-200 bg-clip-text text-transparent">
    //         Secured.
    //       </h1>
    //     </div>
    //     <div>
    //       <p>
    //         Expert Cybersecurity Solutions Tailored to Protect Your Organization
    //         from Emerging Threats
    //       </p>
    //       {/* buttons  */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
