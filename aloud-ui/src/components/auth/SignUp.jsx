import React, { useState } from "react";
import NavbarSvg from "./NavbarSvg";
import { FcGoogle } from "react-icons/fc";
import { IoAt } from "react-icons/io5";
import { CiLock } from "react-icons/ci";


const SignUp = () => {
  
  return (
    <div className="flex flex-col mx-8  sm:w-[90%] md:w-3/4 lg:w-2/6 md:mx-auto p-8 my-20 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl">
      <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
        <div>
          <NavbarSvg />
        </div>
        <h1 className="text-3xl font-semibold text-black my-auto font-nohemi">
          Create an account
        </h1>
      </div>
      <div className="text-sm font-light text-[#6B7280] pb-8 mx-auto font-splineSans">
        Get started with Maybox today!
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          
          className="flex items-center justify-center w-[303px] md:w-1/2 text-black bg-white border border-gray-300 rounded-xl px-5 py-2.5 font-medium font-splineSans text-base focus:outline-none  mb-6"
        >
          <span className="flex items-center">
            <FcGoogle className="mr-2 text-lg" />
            Sign up with Google
          </span>
        </button>
      </div>

      <div className="relative flex justify-center pb-4 items-center">
        <span className="mx-4 font-medium font-splineSans text-gray-500">
          OR
        </span>
      </div>

      <form className="flex flex-col items-center">
        <div className="pb-2  w-[303px] md:w-full font-splineSans">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#111827]"
          >
            Email Address*
          </label>
          <div className="relative  text-gray-400">
            <input
              type="email"
              name="email"
              id="email"
              className="pr-12 mb-2 bg-white text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-[13px] ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center p-1 pr-3">
              <IoAt />
            </span>
          </div>
        </div>


        <div className="pb-6  w-[303px] md:w-full font-splineSans">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-[#111827]"
          >
            Password*
          </label>
          <div className="relative text-gray-400">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create password"
              className="pr-12 mb-2 bg-white rounded-[13px] text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
              autoComplete="new-password"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center p-1 pr-3">
              <CiLock />
            </span>
          </div>
          <p className="mt-1 text-sm text-black font-meduim">
            Must be at least 8 characters
          </p>
        </div>
        <button
          type="submit"
          className=" w-[279px] md:w-full text-white bg-black border-gray-300 font-semibold rounded-xl font-splineSans text-sm px-5 py-2.5 text-center mb-6"
        >
          Create Account
        </button>
      </form>

      <div className="text-sm font-normal font-splineSans text-black text-center">
        Already have an account?{" "}
        <a href="/signin" className="font-normal text-black hover:underline">
          Login
        </a>
      </div>
    </div>
  );
};

export default SignUp;
