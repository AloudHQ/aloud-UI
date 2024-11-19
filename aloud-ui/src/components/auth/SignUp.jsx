import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoAt } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import AloudLogo from "../AloudLogo";


const SignUp = () => {
  
  return (
    <div className="flex flex-col mx-8 border-2 border-[#E7E7E7] sm:w-[90%] md:w-3/4 lg:w-[605px] md:mx-auto p-8 my-20 md:p-10 2xl:p-12 3xl:p-14 bg-[#fffcf7] rounded-2xl">
      <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
        <div>
          <AloudLogo />
        </div>
      </div>
      <div className="text-sm font-meduim text-[#A4A4A4] pb-8 mx-auto font-inter">
      Hello, Love to see you! Enter your details to get started now 
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          
          className="flex items-center justify-center w-[303px] md:w-1/2 text-black bg-[#fffcf7] border border-gray-300 rounded-xl px-5 py-2.5 font-medium font-inter text-base focus:outline-none  mb-6"
        >
          <span className="flex items-center">
            <FcGoogle className="mr-2 text-lg" />
            Sign up with Google
          </span>
        </button>
      </div>


      <form className="flex flex-col items-center">
        <div className="pb-2  w-[303px] md:w-full font-inter">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-[#111827]"
          >
            Nickname
          </label>
          <div className="relative  text-gray-400">
            <input
              type="email"
              name="email"
              id="email"
              className="pr-12 mb-2 bg-[#fffcf7] text-[#A4A4A4] border focus:border-transparent border-gray-300 sm:text-sm rounded-[13px] ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center p-1 pr-3">
              <IoAt />
            </span>
          </div>
        </div>
        <div className="pb-2  w-[303px] md:w-full font-inter">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-[#111827]"
          >
            Email Address
          </label>
          <div className="relative  text-gray-400">
            <input
              type="email"
              name="email"
              id="email"
              className="pr-12 mb-2 bg-[#fffcf7] text-[#A4A4A4] border focus:border-transparent border-gray-300 sm:text-sm rounded-[13px] ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center p-1 pr-3">
              <IoAt />
            </span>
          </div>
        </div>


        <div className="pb-6  w-[303px] md:w-full font-inter">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold text-[#111827]"
          >
            Password
          </label>
          <div className="relative text-gray-400">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create password"
              className="pr-12 mb-2 bg-[#fffcf7] rounded-[13px] text-[#A4A4A4] border focus:border-transparent border-gray-300 sm:text-sm ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
              autoComplete="new-password"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center p-1 pr-3">
              <CiLock />
            </span>
          </div>
        </div>
        <button
          type="submit"
          className=" w-[279px] h-[55px] md:w-full text-white bg-[#8289FC] border-gray-300 font-semibold rounded-xl font-inter text-sm px-5 py-2.5 text-center mb-6"
        >
          Confirm
        </button>
      </form>

      <div className="text-sm font-normal font-inter text-[#A4A4A4] text-center">
        Already have an account?{" "}
        <a href="/signin" className="font-medium text-[#1976D2] hover:underline">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default SignUp;
