// React
import React, { useState } from "react";

// Media files
import leftArrow from "../../../assets/img/landingPage/banner/left_arrow.png";
import leftDarkArrow from "../../../assets/img/landingPage/banner/left_dark_arrow.png";
import rightDarkArrow from "../../../assets/img/landingPage/banner/right_dark_arrow.png";
import rightArrow from "../../../assets/img/landingPage/banner/right_arrow.png";
import contentImg from "../../../assets/img/landingPage/team/rectangle.png";

// Carousel / Banner
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Carousel
const handleDragStart = (e) => e.preventDefault();
const responsiveObject = {
  0: {
    items: 1,
  },
  600: {
    items: 2,
  },
  768: {
    items: 3,
  },
  1200: {
    items: 4,
  },
  1500: {
    items: 5,
  },
};

const firstBannerItems = [
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center h-full  items-center mx-1 "
  >
    <img src={contentImg} alt="content" className="w-full" />
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center h-full  items-center mx-1 "
  >
    <img src={contentImg} alt="content" className="w-full" />
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center h-full  items-center mx-1 "
  >
    <img src={contentImg} alt="content" className="w-full" />
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center h-full  items-center mx-1 "
  >
    <img src={contentImg} alt="content" className="w-full" />
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center h-full  items-center mx-1 "
  >
    <img src={contentImg} alt="content" className="w-full" />
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center h-full  items-center mx-1 "
  >
    <img src={contentImg} alt="content" className="w-full" />
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className=" flex justify-center h-full  items-center mx-1 "
  >
    <img src={contentImg} alt="content" className="w-full" />
  </div>,
];

const Follow_Us = () => {
  // local variables
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="mt-20">
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center w-[85%] mx-auto ">
          <h1 className="text-xl font-bold">Folow us on</h1>
        </div>

        <div>
          <h1 className="text-center my-10">@Realvedic</h1>

          <div className="relative w-[85%]  mx-auto">
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
                  <div className=" absolute left-[-20px] md:left-0 top-[25%] md:top-[35%] w-[50px]  h-[50px] flex justify-start items-center   opacity-80 hover:opacity-100  group cursor-pointer">
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
                  <div className=" absolute right-[-20px] md:right-0 top-[25%] md:top-[35%]   w-[50px]  h-[50px] flex justify-end items-center   opacity-80 hover:opacity-100  group cursor-pointer">
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

export default Follow_Us;
