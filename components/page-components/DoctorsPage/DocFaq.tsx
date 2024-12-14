/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import FaqQuestion from "./FaqQuestion";

const DocFaq = () => {
  return (
    <div className=" h-[602.84px] w-full bg-white p-8">
      <h5 className=" text-center text-blue-500 text-[14px] font-bold">
        Get Your Answer
      </h5>

      <h1 className=" text-[#1B3C74] font-semibold text-[48px] text-center">
        Frequently Asked Questions
      </h1>

      <div className=" w-full flex gap-5">
        <div className=" h-[498px] w-fit flex items-center">
          <img
            src="/images/Vector.png"
            alt=""
            className=" h-[135px] w-[117px] "
          />
        </div>

        <div className=" relative w-[40%]">
          <img src="/images/FAQ.png" alt="" className=" w-[522px] h-[498px]" />
          <div className=" absolute w-[181.93px] h-[64.59px] bg-white shadow-2xl rounded-md bottom-32 -left-11 flex gap-3 items-center justify-center">
            <img
              src="/images/Smily.png"
              alt=""
              className=" h-[34px] w-[34px]"
            />
            <div className=" flex flex-col justify-center ">
              <p className=" text-sm font-bold">84k+</p>
              <p className=" text-sm text-gray-400">Happy Patients</p>
            </div>
          </div>

          <div className=" absolute w-[54.59px] h-[54.59px] bg-white shadow-2xl rounded-full top-32 right-7 flex gap-3 items-center justify-center">
            <img
              src="/images/heart.png"
              alt=""
              className=" h-[44px] w-[64px]"
            />
          </div>
        </div>

        <div className=" w-[45%]">
          <FaqQuestion />
        </div>
      </div>
    </div>
  );
};

export default DocFaq;
