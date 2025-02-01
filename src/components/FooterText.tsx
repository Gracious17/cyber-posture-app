import Image from "next/image";
import React from "react";
import X from "../../public/X Logo.png";
import Ig from "../../public/Logo Instagram.png";
import YouTube from "../../public/Logo YouTube.png";
import Linkdin from "../../public/LinkedIn.png";
import cyber from "../../public/Layer_2.png";

const FooterText = () => {
  return (
    <div className="w-full justify-between gap-2  flex flex-wrap  text-white text-center mx-auto mt-16 sm:mt-20">
      {/* footer social media icons */}
      <div className="ml-2">
        <ul className="flex justify-center gap-5">
          {/* first icon  */}
          <li>
            <a href="#" className="text-3xl">
              <i>
                <Image src={X} alt="X logo" width={20} height={20} />
              </i>
            </a>
          </li>
          {/* second icon */}
          <li>
            <a href="#" className="text-3xl ">
              <i>
                <Image src={Ig} alt="Ig logo" width={20} height={20} />
              </i>
            </a>
          </li>
          {/* third icon */}
          <li>
            <a href="#" className="text-3xl">
              <i>
                <Image
                  src={YouTube}
                  alt="YouTube logo"
                  width={20}
                  height={20}
                />
              </i>
            </a>
          </li>
          {/* fourth icon */}
          <li>
            <a href="#" className="text-3xl">
              <i>
                <Image
                  src={Linkdin}
                  alt="Linkdin logo"
                  width={20}
                  height={20}
                />
              </i>
            </a>
          </li>
        </ul>
      </div>
      {/* use cases list 1 */}
      <div className="text-left">
        <h2 className="font-semibold text-sm tracking-widest ">Use Cases</h2>
        <ul className="flex justify-center gap-2 flex-col text-sm ">
          <li className="hover:underline cursor-pointer">UI design</li>
          <li className="hover:underline cursor-pointer">UX design</li>
          <li className="hover:underline cursor-pointer">Wireframing</li>
          <li className="hover:underline cursor-pointer">Diagramming</li>
          <li className="hover:underline cursor-pointer">Brainstorming</li>
          <li className="hover:underline cursor-pointer">Online whiteboard</li>
          <li className="hover:underline cursor-pointer">Team collaboration</li>
        </ul>
      </div>
      {/* use cases list 2 */}
      <div className="text-left">
        <h2 className="font-semibold text-sm tracking-widest">Use Cases</h2>
        <ul className="flex justify-center gap-2 flex-col text-sm ">
          <li className="hover:underline cursor-pointer">UI design</li>
          <li className="hover:underline cursor-pointer">UX design</li>
          <li className="hover:underline cursor-pointer">Wireframing</li>
          <li className="hover:underline cursor-pointer">Diagramming</li>
          <li className="hover:underline cursor-pointer">Brainstorming</li>
          <li className="hover:underline cursor-pointer">Online whiteboard</li>
          <li className="hover:underline cursor-pointer">Team collaboration</li>
        </ul>
      </div>
      {/* use cases list 3 */}
      <div className="text-left mb-4 sm:mb-0">
        <h2 className="font-semibold text-sm tracking-widest">Use Cases</h2>
        <ul className="flex justify-center gap-2 flex-col text-sm ">
          <li className="hover:underline cursor-pointer">UI design</li>
          <li className="hover:underline cursor-pointer">UX design</li>
          <li className="hover:underline cursor-pointer">Wireframing</li>
          <li className="hover:underline cursor-pointer">Diagramming</li>
          <li className="hover:underline cursor-pointer">Brainstorming</li>
          <li className="hover:underline cursor-pointer">Online whiteboard</li>
          <li className="hover:underline cursor-pointer">Team collaboration</li>
        </ul>
      </div>
      {/* cyber posture */}
      <div className="mr-4">
        <a href="#" className="text-3xl">
          <Image src={cyber} alt="cyber posture" width={100} height={70} />
        </a>
      </div>
    </div>
  );
};

export default FooterText;
