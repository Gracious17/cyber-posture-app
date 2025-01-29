import React from "react";

const GlideText = () => {
  return (
    <div className="overflow-hidden  w-full h-16 flex  items-center">
      <div className="flex  whitespace-nowrap animate-glideX">
        {/* Text with Gradient */}
        <div className="flex items-center mx-5">
          <span className="text-[60px] font-semibold text-white tracking-widest">
            Banks
          </span>
          <div
            className="w-[18px] h-[18px] ml-4 rounded-full"
            style={{
              background:
                "linear-gradient(90.95deg, #09C6DE 0.81%, #460389 126.33%)",
            }}
          ></div>
        </div>
        <div className="flex items-center mx-5">
          <span className="text-[60px] font-semibold text-white tracking-widest">
            Government
          </span>
          <div
            className="w-[18px] h-[18px] ml-4 rounded-full"
            style={{
              background:
                "linear-gradient(90.95deg, #09C6DE 0.81%, #460389 126.33%)",
            }}
          ></div>
        </div>
        <div className="flex items-center mx-5">
          <span className="text-[60px] font-semibold text-white tracking-widest">
            IT
          </span>
          <div
            className="w-[18px] h-[18px] ml-4 rounded-full"
            style={{
              background:
                "linear-gradient(90.95deg, #09C6DE 0.81%, #460389 126.33%)",
            }}
          ></div>
        </div>
        <div className="flex items-center mx-5">
          <span className="text-[60px] font-semibold text-white tracking-widest">
            Fintech
          </span>
          <div
            className="w-[18px] h-[18px] ml-4 rounded-full"
            style={{
              background:
                "linear-gradient(90.95deg, #09C6DE 0.81%, #460389 126.33%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GlideText;
