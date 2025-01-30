import React from "react";
import vector from "../../public/Vector.png";
import profileImg from "../../public/Ellipse 7.png";
import Image from "next/image";
const cardsData = [
  {
    id: 1,
    profile: profileImg,
    heading: "Jacob Esau",
    position: "CEO Cellulant group",
    content: `Ensure your organization is prepared to meet the highest standards of cybersecurity   compliance,
       Our highest readiness assessments identify gaps and provide actionable recommendations `,
  },
  {
    id: 2,
    profile: profileImg,
    heading: "Jacob Esau",
    position: "CEO Cellulant group",
    content: `Ensure your organization is prepared to meet the highest standards of cybersecurity   compliance,
       Our highest readiness assessments identify gaps and provide actionable recommendations `,
  },
  {
    id: 3,
    profile: profileImg,
    heading: "Jacob Esau",
    position: "CEO Cellulant group",
    content: `Ensure your organization is prepared to meet the highest standards of cybersecurity   compliance,
       Our highest readiness assessments identify gaps and provide actionable recommendations `,
  },
  {
    id: 4,
    profile: profileImg,
    heading: "Jacob Esau",
    position: "CEO Cellulant group",
    content: `Ensure your organization is prepared to meet the highest standards of cybersecurity   compliance,
       Our highest readiness assessments identify gaps and provide actionable recommendations `,
  },
  {
    id: 5,
    profile: profileImg,
    heading: "Jacob Esau",
    position: "CEO Cellulant group",
    content: `Ensure your organization is prepared to meet the highest standards of cybersecurity   compliance,
       Our highest readiness assessments identify gaps and provide actionable recommendations `,
  },
  {
    id: 6,
    profile: profileImg,
    heading: "Jacob Esau",
    position: "CEO Cellulant group",
    content: `Ensure your organization is prepared to meet the highest standards of cybersecurity   compliance,
       Our highest readiness assessments identify gaps and provide actionable recommendations `,
  },
];
const ClientsCards = () => {
  return (
    <div className="w-full flex justify-center pt-12">
      {/* cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {/* Card Component */}
        {cardsData.map((card) => {
          return (
            <div
              key={card.id}
              className="w-[300px]  h-[200px] bg-client-box border-x-2 border-y-[1px] border-box-border rounded-tr-2xl text-left items-start"
            >
              {/* top Icon */}
              <div className="text-right flex justify-end pr-3  ">
                <Image
                  src={vector}
                  width={30}
                  height={30}
                  alt=""
                  className="mt-5"
                />
              </div>
              {/* profile section */}
              <div className="flex  pb-2">
                <Image
                  src={card.profile}
                  width={40}
                  height={40}
                  alt={card.heading}
                  className="ml-3 mr-0"
                />
                <div className="mb-0 mt-2 text-left ml-1 ">
                  <h4 className="text-xs ">{card.heading} </h4>
                  <p className="text-[0.6rem] "> {card.position} </p>
                </div>
              </div>
              {/* Content */}
              <p className="text-xs ml-6"> {card.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientsCards;
