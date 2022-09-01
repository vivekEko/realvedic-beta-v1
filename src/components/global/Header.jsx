// React
import React from "react";

// Media files
import logo from "../../assets/img/header/realvedic_logo.svg";
import avatar from "../../assets/img/header/avatar.png";
import search from "../../assets/img/header/search.png";
import cart from "../../assets/img/header/cart.png";

// State Management (Recoil JS)
import sidebarStatusAtom from "../../recoil/sidebar/sidebarStatusAtom";
import { useRecoilState } from "recoil";

// components
import MomBaby, { MomBabyLink2 } from "../homePage/1_nav/nav_links/MomBabyLink";
import PharmaLink, {
  PharmaLink2,
} from "../homePage/1_nav/nav_links/PharmaLink";
import Products, {
  ProductsLink2,
} from "../homePage/1_nav/nav_links/ProductsLink";

const Header = () => {
  return (
    <div className=" bg-[#D9D9D9] md:bg-white py-3 sticky right-0 left-0 top-0 z-[95] ">
      <div className="flex justify-between items-center w-[85%] mx-auto ">
        {/* Empty div */}
        <div className="md:hidden flex-1 md:flex-auto "></div>

        {/* Logo container */}
        <div className="w-fit flex-1  md:flex-none ">
          <img
            src={logo}
            alt="Realvedic Logo"
            className="mb-2 w-[100px] md:w-[140px] mx-auto "
          />
        </div>

        {/* Empty div */}
        <div className="md:hidden flex-1 md:flex-auto "></div>

        {/* nav links */}
        <div className="w-[85%] lg:w-[70%]  justify-between items-center gap-10  mx-auto py-10 hidden ">
          <div>
            <h1 className="font-bold text-base">Blog</h1>
          </div>

          <MomBaby />
          <Products />
          <PharmaLink />
          <div>
            <div className="flex items-center gap-1 relative">
              <h1 className="font-bold text-base">Doctors</h1>
            </div>
          </div>
        </div>

        {/* header icons */}
        <div className="hidden md:flex justify-between items-center gap-6 ">
          <img src={avatar} alt="avatar" className="w-[40px]" />
          <img src={search} alt="search" className="w-[40px]" />
          <img src={cart} alt="cart" className="w-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;

// Second Variant Header
const Header2 = () => {
  return (
    <div className=" bg-[#D9D9D9] md:bg-white py-3 sticky top-0 z-[95] md:static ">
      <div className="flex justify-between items-center w-[85%] md:w-[90%] mx-auto  ">
        {/* Empty div */}
        <div className="md:hidden flex-1 md:flex-auto "></div>

        {/* Logo container */}
        <div className="w-fit flex-1  md:flex-none ">
          <img
            src={logo}
            alt="Realvedic Logo"
            className="mb-2 w-[100px] md:w-[80px] lg:w-[100px] mx-auto "
          />
        </div>

        {/* Empty div */}
        <div className="md:hidden flex-1 md:flex-auto "></div>

        {/* nav links */}
        <div className="  justify-around items-center gap-10  mx-auto py-5 hidden md:flex  flex-1 px-5">
          <div>
            <h1 className="font-bold text-base lg:text-lg">Blog</h1>
          </div>

          <MomBabyLink2 />
          <ProductsLink2 />
          <PharmaLink2 />
          <div>
            <div className="flex items-center gap-1 relative">
              <h1 className="font-bold text-base lg:text-lg">Doctors</h1>
            </div>
          </div>
        </div>

        {/* header icons */}
        <div className="hidden md:flex justify-between items-center gap-5 ">
          <img src={avatar} alt="avatar" className="w-[25px] lg:w-[30px]" />
          <img src={search} alt="search" className="w-[25px] lg:w-[30px]" />
          <img src={cart} alt="cart" className="w-[25px] lg:w-[30px]" />
        </div>
      </div>
    </div>
  );
};

export { Header2 };

const Hamburger = () => {
  // Global variables
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);
  return (
    <div
      className={`  md:hidden flex-1 md:flex-auto flex justify-end z-[150] fixed right-5  top-7  `}
    >
      <div
        onClick={() => setSidebarStatus(!sidebarStatus)}
        className={` ${sidebarStatus ? "py-3  " : "py-1 "} cursor-pointer  `}
      >
        <div className=" w-fit  ">
          <div className="flex justify-start items-center gap-1 ">
            {/* Fist bar */}
            <div
              className={`  ${
                sidebarStatus ? "hidden" : "block"
              } h-[5px] w-[5px] bg-black rounded-lg`}
            ></div>
            <div
              className={`h-[4px] transition  ${
                sidebarStatus ? "w-[35px] rotate-45 " : "w-[25px]"
              } bg-black rounded-lg `}
            ></div>
          </div>

          {/* Second bar */}
          <div
            className={` ${
              sidebarStatus ? "hidden transition duration-500" : "flex"
            }  justify-start items-center gap-1 my-[7px]`}
          >
            <div className="h-[5px] w-[5px] bg-black rounded-lg"></div>
            <div className="h-[4px] w-[18px] bg-black rounded-lg"></div>
          </div>

          {/* Third bar */}
          <div className="flex justify-start items-center gap-1">
            <div
              className={` ${
                sidebarStatus ? "hidden" : "block"
              } h-[5px] w-[5px] bg-black rounded-lg`}
            ></div>
            <div
              className={`h-[4px] transition  ${
                sidebarStatus
                  ? "w-[35px] -rotate-45 -translate-y-[4px] "
                  : "w-[25px]"
              } bg-black rounded-lg `}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hamburger };
