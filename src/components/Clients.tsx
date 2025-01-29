import React from "react";
import ClientsCards from "./ClientsCards";

const Clients = () => {
  return (
    <div className="w-full items-center justify-center text-center pt-5">
      <div>
        <p className="font-normal tracking-widest text-sm  font-sans items-center text-customBlue pb-5 uppercase">
          What they said about us
        </p>
        <h4 className="  text-3xl font-bold">
          <span className="bg-[linear-gradient(to_right,rgba(54,55,160,1),rgba(9,198,222,1),rgba(70,3,137,1))]  bg-clip-text text-transparent">
            Loved By Our Clients
          </span>
        </h4>
      </div>
      {/* Clients Cards component*/}
      <ClientsCards />
    </div>
  );
};

export default Clients;
