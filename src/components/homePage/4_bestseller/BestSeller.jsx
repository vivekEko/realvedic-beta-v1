// react
import React from "react";

// media files
import product from "../../../assets/img/landingPage/category/rectangle.png";

const BestSeller = () => {
  // products list
  const products = [
    {
      productName: "Garlic Rasam Powder | Instant Mix ",
      weight: "250g",
      price: 110.0,
    },
    {
      productName: "Kokum Rasam | Instant Mix  ",
      weight: "250g",
      price: 110.0,
    },
    {
      productName: "Lemon Grass Rasam | Instant Mix ",
      weight: "250g",
      price: 110.0,
    },
    {
      productName: "Golden Milk | Turmeric Milk Mix ",
      weight: "250g",
      price: 110.0,
    },
    {
      productName: "Angaya Podi ",
      weight: "250g",
      price: 110.0,
    },
    {
      productName: "Desi Chai Masala ",
      weight: "250g",
      price: 110.0,
    },
  ];
  return (
    <div className="mt-10">
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center w-[85%] mx-auto mb-5">
          <h1 className="text-xl font-bold">Best Seller</h1>
        </div>

        {/* bestseller grid */}
        <div className="grid grid-cols-2 md:grid-cols-3  gap-5 py-5 w-[85%] mx-auto">
          {products?.map((data, index) => {
            return (
              <div className="group">
                <div className="w-full overflow-hidden ">
                  <img
                    src={product}
                    alt="product"
                    className="w-full group-hover:scale-110 transition-all"
                  />
                </div>

                <div className="flex justify-between items-start font-bold text-sm mt-5">
                  <h1 className="flex-[0.6] leading-4 md:text-xl md:leading-5">
                    {data?.productName}
                  </h1>
                  <div className="flex-[0.4]">
                    <h1 className="p-3 bg-[#ECECEC] w-fit ml-auto md:text-xl">
                      {data?.weight}
                    </h1>
                  </div>
                </div>
                <div className="">
                  <div className="ml-auto w-fit  text-sm my-2 md:text-xl">
                    Rs. {data?.price.toFixed(2)}
                  </div>
                  <div className="bg-[#D9D9D9] text-sm md:text-lg text-center font-bold p-2 px-8 w-fit ml-auto cursor-pointer active:scale-95 transition-all">
                    ADD TO CART
                  </div>
                  <div className="text-xs md:text-base w-fit ml-auto mt-2 cursor-pointer underline-offset-4 hover:underline hidden md:block">
                    View Details
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-xl p-3 px-4 bg-[#d9d9d9] w-fit mx-auto font-bold hidden md:block my-10 cursor-pointer active:scale-95 transition-all">
          View all
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default BestSeller;
