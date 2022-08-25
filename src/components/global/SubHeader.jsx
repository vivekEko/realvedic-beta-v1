import React from "react";
import search from "../../assets/img/header/search.png";

const SubHeader = () => {
  return (
    <div className=" md:hidden  my-4">
      <div className="flex justify-center items-center w-[90%] mx-auto  border-[2px] p-1 px-2 border-[#D9D9D9]">
        <input type="text" className="outline-none border-0  flex-1 " />
        <img src={search} alt="search" className="w-[40px]" />
      </div>
    </div>
  );
};

export default SubHeader;
