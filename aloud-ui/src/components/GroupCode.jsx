import React from "react";
import groupImage from "../asset/groupImage.svg";
import logo from "../asset/Aloud.svg";

const GroupCode = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-[#FFFCF7]">
        <div className="mt-6">
        <img
          src={logo}
          alt="Aloud Logo"
          className="w-28 h-28 rounded-full mb-30 "
        />
        </div>

      <div className="mt-10">
        <img
          src={groupImage}
          alt="Group Illustration"
          className="margin-auto width-40 rounded-full mt-10"
        />
      </div>

      <p className="text-center text-[#CECECE] mt-0 mb-5 text-md pt-2" style={{ fontWeight: 600, fontFamily: 'Inter', fontSize: '18px' }}>
        Create a group of six people 
        <div className="mb-6"></div>
        <strong>or</strong>
        <div className="mb-6"></div>
        Paste link here
      </p>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="5678"
          className="text-center mb-12 py-0 px-10 border border-gray-200 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#8289FC] bg-[#FFFCF7] placeholder-[#E7E7E7] w-1/2"
          style={{fontWeight: 600, fontFamily: 'Inter', fontSize: '28px'}}
        />
      </div>

      <button className="bg-[#8289FC] text-white font-semibold py-2 px-36 rounded-lg hover:bg-[#6D49BF]">
        Next
      </button>
    </div>
  );
};

export default GroupCode;
