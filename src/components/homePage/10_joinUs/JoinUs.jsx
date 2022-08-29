// react
import React from "react";

// media files
import arrow from "../../../assets/img/landingPage/joinUs/white-arrow.png";

const JoinUs = () => {
  return (
    <div className="my-10 ">
      {/* Heading */}
      <div className="flex justify-between items-center w-[85%] mx-auto ">
        <h1 className="text-xl font-bold text-center w-full">
          Join the Family
        </h1>
      </div>
      <div className="mx-auto border-[#9F9F9F] border my-5 w-[85%] max-w-[700px] rounded-lg flex items-center">
        <input
          type="text"
          className="w-full h-14 px-2 rounded-lg outline-none border-0"
        />
        <div className=" w-14 h-14  rounded-lg bg-[#D9D9D9] flex justify-center items-center">
          <img src={arrow} alt="join us" />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
