import React from "react";
const cardsData = [
  {
    id: 1,

    heading: "Compliance Readiness and Self-Assessments",

    content: `Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations `,
  },
  {
    id: 2,

    heading: " Security Architecture and Design  ",

    content: `Build a resilient security infrastructure with our expert guidance. We design security frameworks that integrate seamlessly with your business operations, providing robust protection against threats.
 `,
  },
  {
    id: 3,

    heading: "Ransomware Susceptibility Assessment",

    content: `Identify vulnerabilities and fortify your defenses against ransomware attacks. Our assessments help you understand your risk and implement effective prevention strategies.
 `,
  },
  {
    id: 4,

    heading: "Technical Security Standards",

    content: `Adopt industry best practices with our technical security standards services. We help you develop and implement standards that ensure your systems and processes are secure`,
  },
  {
    id: 5,

    heading: "Business Impact Assessment",

    content: `Understand the potential impact of disruptions on your operations. Our assessments provide insights into critical business functions and guide you in developing effective continuity plans.
`,
  },
  {
    id: 6,

    heading: "Merger And Acquisition Due Diligence",

    content: `Ensure your mergers and acquisitions are secure with our due diligence services. We identify cybersecurity risks and provide recommendations to protect your investments.
`,
  },
];
const GlideBox = () => {
  return (
    <div className="w-full h-[300px] flex justify-center pt-12 bg-transparent overflow-hidden">
      {/* cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center animate-glideY">
        {/* Card Component */}
        {cardsData.map((card) => {
          return (
            <div
              key={card.id}
              className="w-[250px]  h-[150px] bg-black/40 border-x-2 border-y-[1px] border-box-border rounded-lg text-left items-start"
            >
              <div className="pt-5 px-3">
                <h3 className="text-sm mb-2">{card.heading}</h3>
                <p className="text-[0.5rem]">{card.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlideBox;
