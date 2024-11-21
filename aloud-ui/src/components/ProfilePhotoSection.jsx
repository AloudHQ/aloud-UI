import React from "react";
import Pfp from "../assets/images/pfp.jpg";
import PfpYellow from "../assets/images/pfpyellow.jpg";
import PfpSvg from "./PfpSvg";

export default function ProfilePhotoSection() {
  return (
    <>
      <div className="relative font-inter flex flex-col justify-center mx-auto w-[321px] md:w-[549px]">
        {/* profile pic image */}
        <div className="profile-pic flex flex-col md:w-[549px] relative">
          <div className="rounded-t-[22px] relative">
            <img
              className="h-[143px] w-[549px] rounded-t-[22px]"
              src={Pfp}
              alt=""
            />
            <div className="absolute bottom-[-43px] left-6 md:bottom-[-50px] md:left-4">
              <img
                className="rounded-full mb-4 w-[87px] h-[87px]"
                src={PfpYellow}
                alt=""
              />
            </div>
          </div>
          {/* profile pic details */}
          <div className="flex flex-col rounded-b-[22px] gap-6 px-6 bg-[#F6F6F6] pt-8 md:pt-12 pb-6">
            <h1 className="mt-4 font-semibold">Your Photo</h1>
            <p className="text-[#585656]">
              This would be displayed as your profile
            </p>
            <div className="flex gap-6 font-medium text-[#585858]">
              <div className="flex flex-col md/lg:flex-row gap-6">
                <button className="w-[133px] h-[38px] font-medium border-[#585656] border rounded-[14px]">
                  Upload New
                </button>
                <button className="w-[133px] h-[38px] text-white bg-[#3C49FFA3] rounded-[14px]">
                  Save
                </button>
              </div>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 ml-auto">
                <PfpSvg />
              </button>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}