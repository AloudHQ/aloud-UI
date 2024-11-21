import React from "react";
import "../assets/styles/form.css";

export default function PersonalInformationSection() {
  return (
    <>
      <div className="font-inter mx-auto mt-12 rounded-[22px] max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-[#F6F6F6] w-[321px] md:w-[549px]">
        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div className="mx-auto max-w-lg text-left">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Personal Information
            </h1>
          </div>
          <div className="rounded-[7px]">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-[#111827]"
          >
            Full Name
          </label>

            <div className="relative">
              <input
                type="text"
                className="w-full h-[38px] placeholder-semibold text-[#A4A4A4] bg-[#F5F5F5] rounded-[7px]  border-[#CBCBCB] border p-4 pe-12 text-sm "
                placeholder="Henderson Dike-Benard"
              />
            </div>
          </div>

          <div className="rounded-[7px]">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-[#111827]"
          >
            Email Address
          </label>

            <div className="relative">
              <input
                type="email"
                className="w-full h-[38px] placeholder-semibold text-[#A4A4A4] bg-[#F5F5F5] rounded-[7px] border-[#CBCBCB] border p-4 pe-12 text-sm "
                placeholder="hendersondike@gmail.com"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
            </div>
          </div>

          <div className="rounded-[7px]">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-[#111827]"
          >
            Nickname
          </label>

            <div className="relative">
              <input
                type="text"
                className="w-full h-[38px] placeholder-semibold text-[#A4A4A4] bg-[#F5F5F5] rounded-[7px] border-[#CBCBCB] border p-4 pe-12 text-sm "
                placeholder="broughtbygod"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
