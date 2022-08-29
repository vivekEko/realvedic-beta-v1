// react
import React from "react";

// media files
import blog from "../../../assets/img/landingPage/nav/blog.png";
import doc from "../../../assets/img/landingPage/nav/doc.png";

// components
import MomBaby from "./nav_links/MomBabyLink";
import PharmaLink from "./nav_links/PharmaLink";
import Products from "./nav_links/ProductsLink";

const Nav = () => {
  return (
    <nav className="bg-[#D9D9D9] hidden md:block">
      <div className="w-[85%] lg:w-[70%] flex justify-between items-center gap-10  mx-auto py-10">
        <div>
          <img src={blog} alt="Blog" className="w-[40px] mx-auto mb-1" />
          <h1 className="font-bold text-xl">Blog</h1>
        </div>

        <MomBaby />
        <Products />
        <PharmaLink />
        <div>
          <img src={doc} alt="Doc" className="w-[40px] mx-auto mb-1" />
          <div className="flex items-center gap-1 relative">
            <h1 className="font-bold text-xl">Doctors</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
