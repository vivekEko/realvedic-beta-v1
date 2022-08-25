import React from "react";
import logo from "../../assets/img/header/realvedic_logo.png";
import avatar from "../../assets/img/header/avatar.png";
import search from "../../assets/img/header/search.png";
import cart from "../../assets/img/header/cart.png";

const Header = () => {
  return (
    <div className=" bg-[#D9D9D9] md:bg-white py-5">
      <div className="flex justify-between items-center w-[85%] mx-auto ">
        {/* Empty div */}
        <div className="md:hidden flex-1 md:flex-auto "></div>

        {/* Logo container */}
        <div className="w-fit  flex-1 md:flex-none">
          <img
            src={logo}
            alt="Realvedic Logo"
            className="mb-2 w-[50px] md:w-[40px] mx-auto"
          />
          <h1 className="font-bold text-center text-xl md:text-base leading-5 md:leading-3 tracking-widest">
            REAL
          </h1>
          <h1 className="font-bold text-center text-xl md:text-base leading-5">
            VEDIC
          </h1>
        </div>

        {/* header icons */}
        <div className="hidden md:flex justify-between items-center gap-6">
          <img src={avatar} alt="avatar" className="w-[40px]" />
          <img src={search} alt="search" className="w-[40px]" />
          <img src={cart} alt="cart" className="w-[40px]" />
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex-1 md:flex-auto flex justify-end">
          <div className=" w-fit ">
            <div className="flex justify-start items-center gap-1 ">
              <div className="h-[5px] w-[5px] bg-black rounded-lg"></div>
              <div className="h-[4px] w-[25px] bg-black rounded-lg"></div>
            </div>
            <div className="flex justify-start items-center gap-1 my-[7px]">
              <div className="h-[5px] w-[5px] bg-black rounded-lg"></div>
              <div className="h-[4px] w-[18px] bg-black rounded-lg"></div>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div className="h-[5px] w-[5px] bg-black rounded-lg"></div>
              <div className="h-[4px] w-[25px] bg-black rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
