import Image from "next/image";
import React from "react";
import procativeImg from "../../public/Frame 19.png";
import expertiseImg from "../../public/Frame 17.png";
import solutionImg from "../../public/Frame 18.png";
import commitmentImg from "../../public/Frame 20.png";

const Tools = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-2">
        {/* 1st Box */}
        <div className="text-center items-center justify-center w-[150px] h-[200px] bg-box-color border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-md">
          <div className="text-center items-center justify-center">
            <Image
              src={procativeImg}
              width={80}
              height={60}
              alt="procative image"
              className="mx-auto mt-5 "
            />
          </div>
          <div>
            <h3 className="mx-2 text-sm mb-2">Procative Approach</h3>
            <p className="text-[0.5rem]">
              We stay ahead of emerging threats to ensure your organization is
              always Protected
            </p>
          </div>
        </div>
        {/* 2nd Box */}
        <div className="text-center items-center justify-center w-[150px] h-[200px] bg-box-color border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-md">
          <div>
            <Image
              src={expertiseImg}
              width={80}
              height={60}
              alt="expertise Image"
              className="mx-auto mt-5"
            />
          </div>
          <div>
            <h3 className="mx-2 text-sm mb-2">Expertise</h3>
            <p className="text-[0.5rem]">
              We stay ahead of emerging threats to ensure your organization is
              always Protected
            </p>
          </div>
        </div>
        {/* 3rd Box */}
        <div className="text-center items-center justify-center w-[150px] h-[200px] bg-box-color border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-md">
          <div>
            <Image
              src={solutionImg}
              width={80}
              height={60}
              alt="solution Image"
              className="mx-auto mt-5"
            />
          </div>
          <div>
            <h3 className="mx-2 text-sm mb-2">Tailored Solutions</h3>
            <p className="text-[0.5rem]">
              We stay ahead of emerging threats to ensure your organization is
              always Protected
            </p>
          </div>
        </div>
        {/* 4th Box */}
        <div className="text-center items-center justify-center w-[170px] h-[200px] bg-box-color border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-md">
          <div>
            <Image
              src={commitmentImg}
              width={80}
              height={60}
              alt="commitment image"
              className="mx-auto mt-7"
            />
          </div>
          <div>
            <h3 className=" text-[0.8rem] mb-2">Commitment to Excellence</h3>
            <p className="text-[0.5rem]">
              We stay ahead of emerging threats to ensure your organization is
              always Protected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
