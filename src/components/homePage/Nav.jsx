import React, { useState } from "react";

// media files
import blog from "../../assets/img/landingPage/nav/blog.png";
import momBaby from "../../assets/img/landingPage/nav/momBaby.png";
import products from "../../assets/img/landingPage/nav/products.png";
import pharma from "../../assets/img/landingPage/nav/pharma.png";
import doc from "../../assets/img/landingPage/nav/doc.png";
import down_arrow from "../../assets/img/landingPage/nav/down_arrow.png";
import dropdown_triangle from "../../assets/img/landingPage/nav/dropdown_triangle.svg";

// npm packages
import { useDetectClickOutside } from "react-detect-click-outside";

const Nav = () => {
  // local variables
  const [selectedNavLink, setSelectedNavLink] = useState({
    MomBaby: false,
    Products: false,
    Pharma: false,
    Doctor: false,
  });

  // close menu items list when clicked outside
  const closeDropdown = () => {
    setSelectedNavLink((selectedNavLink) => ({
      ...selectedNavLink,
      MomBaby: false,
    }));
  };
  const detectOutsideClick = useDetectClickOutside({
    onTriggered: closeDropdown,
  });
  return (
    <div className="bg-[#D9D9D9] hidden md:block">
      <div className="w-[85%] lg:w-[70%] flex justify-between items-center gap-10  mx-auto py-10">
        <div>
          <img src={blog} alt="Blog" className="w-[40px] mx-auto mb-1" />
          <h1 className="font-bold text-xl">Blog</h1>
        </div>

        <div ref={detectOutsideClick} className="relative">
          <div
            onClick={() => {
              if (selectedNavLink?.MomBaby == true) {
                setSelectedNavLink((selectedNavLink) => ({
                  ...selectedNavLink,
                  MomBaby: false,
                }));
              } else {
                setSelectedNavLink((selectedNavLink) => ({
                  ...selectedNavLink,
                  MomBaby: true,
                }));
              }
            }}
          >
            <img
              src={momBaby}
              alt="Mom &amp; Baby"
              className="w-[40px] mx-auto mb-1"
            />
            <div className="flex items-center gap-1 relative cursor-pointer ">
              <h1 className="font-bold text-xl">Mom &amp; Baby</h1>
              <img
                src={down_arrow}
                alt="..."
                className="absolute top-[50%] -right-4"
              />
            </div>
          </div>

          <div
            className={` ${
              selectedNavLink?.MomBaby ? "block" : "hidden"
            } absolute top-[105%] left-0 w-[200px]  pt-5`}
          >
            <div className="bg-white relative text-[#070707] p-5 pt-10  font-medium text-lg">
              <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
                Flour Packs.
              </h1>
              <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
                Dosa Mix
              </h1>
              <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
                Noodles and Pasta
              </h1>
              <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
                Rasam &amp; Soups
              </h1>
              <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
                Spice Blends
              </h1>
              <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
                Beverage Mixes
              </h1>
              <h1 className="mb-5 cursor-pointer hover:underline underline-offset-2 transition-all">
                Shop All
              </h1>

              <img
                src={dropdown_triangle}
                alt="..."
                className="absolute -top-5 left-5"
              />
            </div>
          </div>
        </div>

        <div>
          <img
            src={products}
            alt="Products"
            className="w-[40px] mx-auto mb-1"
          />
          <div className="flex items-center gap-1 relative">
            <h1 className="font-bold text-xl">Products</h1>
            <img
              src={down_arrow}
              alt="..."
              className="absolute top-[50%] -right-4"
            />
          </div>
        </div>

        <div>
          <img src={pharma} alt="Pharma" className="w-[40px] mx-auto mb-1" />
          <div className="flex items-center gap-1 relative">
            <h1 className="font-bold text-xl">Pharma</h1>
            <img
              src={down_arrow}
              alt="..."
              className="absolute top-[50%] -right-4"
            />
          </div>
        </div>

        <div>
          <img src={doc} alt="Doc" className="w-[40px] mx-auto mb-1" />
          <div className="flex items-center gap-1 relative">
            <h1 className="font-bold text-xl">Doctors</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
