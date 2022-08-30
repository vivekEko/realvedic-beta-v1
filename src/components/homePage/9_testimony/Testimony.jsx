// React
import React, { useEffect, useState } from "react";

// Media Files
import blob1 from "../../../assets/img/landingPage/team/blob1.png";
import blob2 from "../../../assets/img/landingPage/team/blob2.png";
import blob3 from "../../../assets/img/landingPage/team/blob3.png";
import blob4 from "../../../assets/img/landingPage/team/blob4.png";
import profileImg from "../../../assets/img/landingPage/team/rectangle.png";

// Carousel / Banner
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Carousel
const handleDragStart = (e) => e.preventDefault();
const responsiveObject = {
  0: {
    items: 1,
  },

  768: {
    items: 2,
  },
  1024: {
    items: 3,
  },
  1200: {
    items: 4,
  },
};

const testimonyData = [
  {
    cover_img: blob1,
    profile_img: profileImg,
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
  },
  {
    cover_img: blob2,
    profile_img: profileImg,
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
  },
  {
    cover_img: blob3,
    profile_img: profileImg,
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
  },
  {
    cover_img: blob4,
    profile_img: profileImg,
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
  },
];

const Testimony = () => {
  // local variables
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [testimonials, setTestimonials] = useState();

  const testimonyItems = testimonyData?.map((data, index) => {
    return (
      <div
        key={index}
        onDragStart={handleDragStart}
        role="presentation"
        className="mx-5 "
      >
        {/* Image with vector*/}
        <div className="relative mx-auto w-fit ">
          <img src={data?.cover_img} alt="..." className="w-64  " />
          <img
            src={data?.profile_img}
            alt="..."
            className="absolute rounded-full w-40   aspect-square z-10 top-[25%]   "
          />
        </div>

        <div className="mt-10 sm:w-[90%] mx-auto">
          <p className="text-center text-sm">{data?.message}</p>
        </div>
      </div>
    );
  });

  useEffect(() => {
    setTestimonials(testimonyItems);
  }, []);

  return (
    <section className="mt-10">
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center w-[85%] mx-auto ">
          <h1 className="text-xl font-bold">Testimony</h1>
        </div>

        <div className="w-[85%] mx-auto my-10">
          <AliceCarousel
            mouseTracking
            autoPlay={false}
            autoPlayInterval={2000}
            infinite={true}
            items={testimonials}
            disableButtonsControls
            renderDotsItem={(e) => {
              return (
                <div
                  className={`transition lg:hidden
                   ${
                     e?.isActive === "__active"
                       ? //  &&
                         //  e?.activeIndex === selectedIndex
                         "bg-[#797676] h-[8px] w-[8px]"
                       : "bg-[#D9D9D9] h-[6px] w-[6px]"
                   }
                   rounded-full mx-2`}
                ></div>
              );
            }}
            responsive={responsiveObject}
            onSlideChanged={(e) => {
              setSelectedIndex(e.item);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimony;
