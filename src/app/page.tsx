// import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ServicesOverview from "@/components/ServicesOverview";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      {/* w-full relative  inset-0 bg-grid-pattern bg-grid-size */}
      {/* absolute bg-black */}
      <div className=" overflow-hidden relative w-[100vw]  flex flex-col items-center justify-center  bg-grid-pattern bg-grid-size  dark:bg-dark">
        <div className=" absolute inset-0 bg-glowing-dark bg-blend-screen "></div>

        <Hero />
        <Services />
        <ServicesOverview />
        <Clients />
        <Footer />
      </div>
    </>
  );
};

export default page;
