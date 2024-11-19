import React from "react";

const GroupCode = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFFDF8]">
      <h1 className="text-4xl font-bold text-[#7F56D9] mb-10">Aloud</h1>

      <div className="mb-6">
        <img
          src="path-to-your-image.png"
          alt="Group Illustration"
          className="w-24 h-24 rounded-full"
        />
      </div>

      <p className="text-center text-gray-600 mb-4">
        Create a group of six people <br />
        or
      </p>

      <div className="mb-6">
        <input
          type="text"
          placeholder="5678"
          className="w-32 text-center py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
        />
      </div>

      <button className="bg-[#7F56D9] text-white font-semibold py-2 px-8 rounded-lg hover:bg-[#6D49BF]">
        Next
      </button>
    </div>
  );
};

export default GroupCode;
