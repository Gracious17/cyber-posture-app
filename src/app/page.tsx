// import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ServicesOverview from "@/components/ServicesOverview";
import Test from "@/components/Test";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      {/* w-full relative  inset-0 bg-grid-pattern bg-grid-size */}
      {/* absolute bg-black */}
      <div className="  relative w-full  flex flex-col items-center justify-center  bg-grid-pattern bg-grid-size ">
        <div className=" absolute inset-0 bg-glowing-dark bg-blend-screen "></div>

        <Test />
        {/* <Hero /> */}
        <Services />
        <ServicesOverview />
        <Clients />
        <Footer />
      </div>
    </>
  );
};

export default page;
