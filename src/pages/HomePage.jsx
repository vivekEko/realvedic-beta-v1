import React from "react";
import Banner from "../components/homePage/2_banner/Banner";
import Nav from "../components/homePage/1_nav/Nav";
import Category from "../components/homePage/3_category/Category";
import BestSeller from "../components/homePage/4_bestseller/BestSeller";
import Vaidya from "../components/homePage/5_vaidya/Vaidya";
import Story from "../components/homePage/6_story/Story";
import Team from "../components/homePage/7_team/Team";
import Follow_Us from "../components/homePage/8_followUs/Follow_Us";
import Testimony from "../components/homePage/9_testimony/Testimony";
import JoinUs from "../components/homePage/10_joinUs/JoinUs";
import Footer from "../components/global/Footer";
import SubHeader from "../components/global/SubHeader";

const HomePage = () => {
  return (
    <div>
      <SubHeader />

      <Nav />
      <Banner />
      <Category />
      <BestSeller />
      <Vaidya />
      <Story />
      <Team />
      <Follow_Us />
      <Testimony />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default HomePage;
