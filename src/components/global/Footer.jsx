// React
import React, { useEffect, useState } from "react";

// Media Files
import arrow from "../../assets/img/landingPage/footer/down-arrow.png";
import facebook from "../../assets/img/landingPage/footer/fb.png";
import instagram from "../../assets/img/landingPage/footer/insta.png";
const Footer = () => {
  // Footer data
  const footerData = [
    {
      heading: "THE REALLY IMPORTANT STUFF",
      contents: [
        {
          linkName: "The Realvedic Story",
        },
        {
          linkName: "Online Doctor Appointment",
        },
        {
          linkName: "Return, Refund and Cancellation Policy",
        },
        {
          linkName: "Terms  & Conditions",
        },
        {
          linkName: "Privacy Policy",
        },
      ],
    },
    {
      heading: "THE IMPORTANT STUFF",
      contents: [
        {
          linkName: "Shop By Categories",
        },
        {
          linkName: "Gifting",
        },
        {
          linkName: "Subscription Club",
        },
      ],
    },

    {
      heading: "GET IN TOUCH",
      contents: [
        {
          linkName: "info@realvedic.com",
        },
        {
          linkName: "+91-8860227160",
        },
        {
          linkName: facebook,
          linkName2: instagram,
        },
        {
          linkName: instagram,
        },
      ],
    },
  ];

  // Local variable
  const [selectedHeading, setSelectedHeading] = useState(null);

  return (
    <footer className="bg-[#D9D9D9] pt-10">
      {/* Mobile & Tablet footer */}
      <div className="mx-auto w-[85%] pb-3 md:hidden">
        {footerData?.map((data, index) => {
          return (
            <div key={index} className="">
              <div
                onClick={() => {
                  selectedHeading === data?.heading
                    ? setSelectedHeading(null)
                    : setSelectedHeading(data?.heading);
                }}
                className=" border-b-2 border-b-[#C7C7C7] transition-all cursor-pointer "
              >
                <div className="flex justify-between items-center py-5">
                  <h1 className="font-semibold">{data?.heading}</h1>
                  <img
                    src={arrow}
                    alt="..."
                    className={`  ${
                      selectedHeading === data?.heading ? "rotate-180" : ""
                    } `}
                  />
                </div>
              </div>

              <div
                className={`overflow-y-hidden ${
                  selectedHeading === data?.heading
                    ? "accordian_open  border-b-2 border-b-[#C7C7C7]"
                    : "accordian_close"
                }  `}
              >
                <div className="h-fit py-4">
                  {data?.contents?.map((links, index) => {
                    return (
                      <div key={index} className="py-1">
                        {links?.linkName === facebook ||
                        links?.linkName === instagram ? (
                          <img
                            src={links?.linkName}
                            alt={links?.linkName}
                            className="w-[40px] my-1 cursor-pointer"
                          />
                        ) : (
                          <h1 className="hover:underline underline-offset-4 cursor-pointer transition">
                            {links?.linkName}
                          </h1>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center items-end h-[200px] w-full ">
          <h1 className="opacity-[35%] font-bold">
            ?? {new Date().getFullYear()} Realvedic Powered by Ekoinfomatics
          </h1>
        </div>
      </div>

      {/* PC footer */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 justify-items-center w-[85%] mx-auto ">
          {footerData?.map((data, index) => {
            return (
              <div key={index}>
                <h1 className="font-bold mb-5">{data?.heading}</h1>

                <div>
                  {data?.contents?.map((links, index) => {
                    return (
                      <div key={index} className="">
                        {links?.linkName === facebook ||
                        links?.linkName2 === instagram ? (
                          <div className="flex gap-2 items-center mb-1">
                            <img
                              src={links?.linkName2}
                              alt={links?.linkName2}
                              className="w-[40px] my-1 cursor-pointer  "
                            />
                            <img
                              src={links?.linkName}
                              alt={links?.linkName}
                              className="w-[40px] my-1 cursor-pointer  "
                            />
                          </div>
                        ) : (
                          <div className="mb-1">
                            <h1 className="hover:underline underline-offset-4 cursor-pointer transition">
                              {links?.linkName === instagram
                                ? " "
                                : links?.linkName}
                            </h1>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 mx-auto w-[85%]">
          <h1 className="font-bold text-xl text-center pb-5">
            ?? {new Date().getFullYear()}, Realvedic Powered by Ekoinfomatics
          </h1>
        </div>

        <div className="bg-[#8E8E8E] h-[50px]"></div>
      </div>
    </footer>
  );
};

export default Footer;
