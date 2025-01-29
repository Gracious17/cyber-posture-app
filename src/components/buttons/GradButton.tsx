import React from "react";

const Button = () => {
  return (
    <>
      <button
        className="px-6 py-1 text-white  rounded-[21.08px] shadow-lg hover:from-[#09C6DE] hover:to-[#460389] text-[12px] font-mono"
        style={{
          background:
            "linear-gradient(90.95deg, #09C6DE 0.81%, #460389 126.33%)",
        }}
      >
        Schedule a Call
      </button>
    </>
  );
};

export default Button;
