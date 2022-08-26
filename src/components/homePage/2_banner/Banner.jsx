// React
import React, { useState } from "react";

// Media files
import leftArrow from "../../../assets/img/landingPage/banner/left_arrow.png";
import leftDarkArrow from "../../../assets/img/landingPage/banner/left_dark_arrow.png";
import rightDarkArrow from "../../../assets/img/landingPage/banner/right_dark_arrow.png";
import rightArrow from "../../../assets/img/landingPage/banner/right_arrow.png";

// Carousel / Banner
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Carousel
const handleDragStart = (e) => e.preventDefault();
const responsiveObject = {
  0: {
    items: 1,
  },
};

const firstBannerItems = [
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center h-full  items-center w-full  "
  >
    <div className="h-[300px] md:h-[500px] mx-1 w-full bg-[#d9d9d9] flex justify-center items-center text-xl text-black">
      1
    </div>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center h-full  items-center w-full  "
  >
    <div className="h-[300px] md:h-[500px] mx-1 w-full bg-[#d9d9d9] flex justify-center items-center text-xl text-black">
      2
    </div>
  </div>,
];

const Banner = () => {
  // local variables
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="mt-5">
      {/* carousel */}
      <div className="  w-[85%] mx-auto relative">
        <div className=" h-full mx-auto relative md:flex justify-center items-center ">
          <div className="md:w-[50%]">
            <AliceCarousel
              mouseTracking
              autoPlay={false}
              autoPlayInterval={2000}
              infinite={true}
              disableDotsControls
              items={firstBannerItems}
              responsive={responsiveObject}
              renderPrevButton={() => {
                return (
                  <div className=" absolute left-[-40px] md:left-0 top-[40%] w-[50px]  h-[50px] flex justify-center items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                    <img src={leftArrow} alt="..." className="md:hidden" />
                    <img
                      src={leftDarkArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    />
                  </div>
                );
              }}
              renderNextButton={() => {
                return (
                  <div className="absolute right-[-40px] md:right-0 top-[40%]   w-[50px]  h-[50px] flex justify-center items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                    <img src={rightArrow} alt="..." className="md:hidden" />
                    <img
                      src={rightDarkArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    />
                  </div>
                );
              }}
              onSlideChanged={(e) => {
                setSelectedIndex(e.item);
              }}
            />
          </div>

          <div className="md:w-[50%]">
            <AliceCarousel
              mouseTracking
              autoPlay={false}
              autoPlayInterval={2000}
              infinite={true}
              disableDotsControls
              items={firstBannerItems}
              responsive={responsiveObject}
              renderPrevButton={() => {
                return (
                  <div className=" absolute left-[-40px] md:left-0 top-[40%] w-[50px]  h-[50px] flex justify-center items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                    <img src={leftArrow} alt="..." className="md:hidden" />
                    <img
                      src={leftDarkArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    />
                  </div>
                );
              }}
              renderNextButton={() => {
                return (
                  <div className="absolute right-[-40px] md:right-0  top-[40%]  w-[50px]  h-[50px] flex justify-center items-center   opacity-80 hover:opacity-100  group cursor-pointer">
                    <img src={rightArrow} alt="..." className="md:hidden" />
                    <img
                      src={rightDarkArrow}
                      alt="..."
                      className="hidden md:block w-[20px] h-[30px]"
                    />
                  </div>
                );
              }}
              onSlideChanged={(e) => {
                setSelectedIndex(e.item);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
