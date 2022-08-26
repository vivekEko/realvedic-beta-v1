// React
import React from "react";

// Media Files
import blob1 from "../../../assets/img/landingPage/team/blob1.png";
import blob2 from "../../../assets/img/landingPage/team/blob2.png";
import blob3 from "../../../assets/img/landingPage/team/blob3.png";
import blob4 from "../../../assets/img/landingPage/team/blob4.png";
import profileImg from "../../../assets/img/landingPage/team/rectangle.png";

// team
const teamMembers = [
  {
    name: "Ranganathan Srinivasan",
    designation: "Founder & CEO",
    cover_img: blob1,
    profile_img: profileImg,
    message:
      "Technocrat entrepreneur with over 20+ years experience. He is the founder and CEO of EKO Infomatics Solutions. Head of Decision Science Team at GE and VP Research and Analytics at WNS. He dons many hats and loves the challenges of a startup.",
  },
  {
    name: "Rangarajan Venkatraman",
    designation: "Co-Founder & CEO",
    cover_img: blob2,
    profile_img: profileImg,
    message:
      "Technocrat entrepreneur with over 20+ years experience. He is the founder and CEO of EKO Infomatics Solutions. Head of Decision Science Team at GE and VP Research and Analytics at WNS. He dons many hats and loves the challenges of a startup.",
  },
  {
    name: "Rajlaxmi Shivram",
    designation: "Head of Product Development",
    cover_img: blob3,
    profile_img: profileImg,
    message:
      "Technocrat entrepreneur with over 20+ years experience. He is the founder and CEO of EKO Infomatics Solutions. Head of Decision Science Team at GE and VP Research and Analytics at WNS. He dons many hats and loves the challenges of a startup.",
  },
  {
    name: "Ranganathan Srinivasan",
    designation: "Founder & CEO",
    cover_img: blob4,
    profile_img: profileImg,
    message:
      "Technocrat entrepreneur with over 20+ years experience. He is the founder and CEO of EKO Infomatics Solutions. Head of Decision Science Team at GE and VP Research and Analytics at WNS. He dons many hats and loves the challenges of a startup.",
  },
];

const Team = () => {
  return (
    <div>
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center w-[85%] mx-auto ">
          <h1 className="text-xl font-bold">Our Team</h1>
        </div>

        {/* team members */}
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-2">
          {teamMembers?.map((data, index) => {
            return (
              <div>
                {/* Image with vector*/}
                <div className="relative">
                  <img src={data?.cover_img} alt="..." />
                  <img
                    src={data?.profile_img}
                    alt="..."
                    className="absolute rounded-full w-[100px] aspect-square z-10 top-[25%] "
                  />
                </div>

                <div className="mt-5">
                  <h1 className="font-bold text-center">{data?.name}</h1>
                  <h1 className="font-bold text-center">{data?.designation}</h1>
                  <p className="text-center mt-5">{data?.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;