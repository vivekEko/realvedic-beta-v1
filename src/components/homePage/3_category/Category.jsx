// React
import React from "react";

// Media Files
import arrow from "../../../assets/img/landingPage/category/arrow.png";

const Category = () => {
  // category list
  const categoryList = [
    {
      categoryName: "Spice Blends",
    },

    {
      categoryName: "Flour Packs",
    },
    {
      categoryName: "Dosa Mix",
    },

    {
      categoryName: "Rasam & Soups",
    },
    {
      categoryName: "Noodles and Pasta",
    },
    {
      categoryName: "Beverage Mixes",
    },
    {
      categoryName: "Shop All",
    },
  ];

  return (
    <section className="mt-10">
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center w-[85%] mx-auto ">
          <h1 className="text-xl sm:text-2xl font-bold  ">Shop by category</h1>
          <h3 className="text-[#545454] text-xs font-bold cursor-pointer hover:underline underline-offset-4 ">
            View all
          </h3>
        </div>

        {/* Category grid */}
        <div className="flex flex-col gap-2 md:gap-5 md:flex-wrap md:flex-row md:justify-start   w-full md:w-[85%] mx-auto my-10 ">
          {categoryList?.map((data, index) => {
            return (
              <div key={index} className="">
                {data?.categoryName === "Shop All" ? (
                  <div className="bg-[#F3F3F3]  md:bg-[#d9d9d9] cursor-pointer group py-9 md:py-7 md:px-2  md:rounded-xl md:w-[250px] md:flex justify-center items-center ">
                    <div className="w-[85%] md:w-[80%] mx-auto flex justify-between items-center">
                      <h2 className="font-bold ">Shop All</h2>
                      <img
                        src={arrow}
                        alt="shop all"
                        className="group-hover:scale-110 transition-all"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={` bg-[#d9d9d9]  cursor-pointer group py-9 md:py-7 md:px-2  md:rounded-xl md:w-[250px] md:flex justify-center items-center `}
                  >
                    <div className="w-[85%] md:w-[80%] mx-auto  ">
                      <h2 className="font-bold ">{data?.categoryName}</h2>
                      <h5 className="text-xs mt-1 group-hover:underline underline-offset-4 outline-[#dfdfdf] md:hidden">
                        View All
                      </h5>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
