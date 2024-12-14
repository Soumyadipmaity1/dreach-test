/* eslint-disable @next/next/no-img-element */
import React from "react";
import R1 from "./client-review/R1";
export default function Testimonial() {
  return (
    <div className="xl:px-28 px-10 sm:px-16 lg:px-20 lg:py-10 pb-20">
      <div>
        <h1 className="lg:text-5xl lg:text-start text-center text-4xl text-[#ff7c25] mt-16 lg:pb-14 pb-5 sm:pb-6  font-bold">
          Happy Stories
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-6 lg:gap-10 sm:gap-8 p-4 flex-0 justify-center">
        <div className="">
          <h1 className="text-xl lg:text-start text-center mt-3 sm:mt-0 font-bold mb-4">
            Creating Vibrant Smiles for Healthy Lifestyles!
          </h1>
          <img
            src="/websiteImages/testimonialUpdated.png"
            alt="Testimonial"
            className="2xlg:w-52 xl:w-60 lg:w-52  sm:w-[188px] w-[264px] mx-auto sm:mx-4 mt-7"
          />
        </div>
        <div className="sm:pt-1 ">
          <R1 />
        </div>
        <div className="sm:pt-1 ">
          <R1 />
        </div>
        <R1 />
        <R1 />
        <R1 />
      </div>
    </div>
  );
}
