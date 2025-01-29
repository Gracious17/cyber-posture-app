import React from "react";

const GlideBox = () => {
  return (
    <div className="h-[300px]  bg-transparent overflow-hidden ">
      <div className="grid   grid-col-2 sm:grid-cols-3  place-items-center gap-2  md:grid-cols-3 mx-16 animate-glide  overflow-hidden">
        {/* 1st Box */}
        <div className=" h-[150px]  bg-black/40 border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-lg mb-7">
          <h3 className=" text-sm mb-2">
            Compliance Readiness and Self-Assessments
          </h3>
          <p className="text-[0.5rem]">
            Ensure your organization is prepared to meet the highest standards
            of cybersecurity compliance. Our readiness assessments identify gaps
            and provide actionable recommendations
          </p>
        </div>
        {/* 2nd Box */}
        <div className=" mb-7 text-center items-center justify-center h-[150px] bg-black/40 border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-lg">
          <h3 className="mx-2 text-sm mb-2">
            Security Architecture and Design
          </h3>
          <p className="text-[0.5rem]">
            Build a resilient security infrastructure with our expert guidance.
            We design security frameworks that integrate seamlessly with your
            business operations, providing robust protection against threats.
          </p>
        </div>
        {/* 3rd Box */}
        <div className="mb-7 text-center items-center justify-center  h-[150px] bg-black/40 border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-lg">
          <h3 className="mx-2 text-sm mb-2">
            Ransomware Susceptibility Assessment
          </h3>
          <p className="text-[0.5rem]">
            Identify vulnerabilities and fortify your defenses against
            ransomware attacks. Our assessments help you understand your risk
            and implement effective prevention strategies.
          </p>
        </div>
        {/* 4th Box */}
        <div className="mb-7 text-center items-center justify-center  h-[150px] bg-black/40 border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-lg">
          <h3 className=" text-[0.8rem] mb-2">Technical Security Standards</h3>
          <p className="text-[0.5rem]">
            Adopt industry best practices with our technical security standards
            services. We help you develop and implement standards that ensure
            your systems and processes are secure
          </p>
        </div>
        {/* 5th Box */}
        <div className="mb-7 text-center items-center justify-center  h-[150px] bg-black/40 border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-lg">
          <h3 className=" text-[0.8rem] mb-2">Business Impact Assessment</h3>
          <p className="text-[0.5rem]">
            Understand the potential impact of disruptions on your operations.
            Our assessments provide insights into critical business functions
            and guide you in developing effective continuity plans.
          </p>
        </div>
        {/* 6th Box */}
        <div className=" mb-7 text-center items-center justify-center  h-[150px] bg-black/40 border-x-2 border-y-[1px] border-box-border  shadow-lg shadow-white/10 rounded-lg">
          <h3 className=" text-[0.8rem] mb-2">
            Merger And Acquisition Due Diligence
          </h3>
          <p className="text-[0.5rem]">
            Ensure your mergers and acquisitions are secure with our due
            diligence services. We identify cybersecurity risks and provide
            recommendations to protect your investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlideBox;
