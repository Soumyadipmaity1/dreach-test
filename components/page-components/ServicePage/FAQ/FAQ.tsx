/* eslint-disable @next/next/no-img-element */

import React from "react";
import AccordionStyle from "./AccordionStyle";

export default function FAQ() {
  return (
    <div className="my-10 pt-16  sm:px-5 lg:px-16 2xlg:px-20 xl:px-36">
      <h2 className="text-center text-3xl sm:text-[34px] lg:text-[36px] text-[#125872] dark:text-[#F97316] font-bold sm:mb-8 px-5 ">
        Frequently Asked Questions
      </h2>
      <div className="flex-col items-center sm:grid lg:grid-cols-2 sm:flex-1 sm:justify-center flex  justify-center px-5 lg:p-2 ">
        <div className="my-5 flex-1 w-92  mx-auto m-2 bg-gray-200 bg-transparent bg-clip-border xl:w-[500px]">
          <div className="relative pt-2">
            <img
              src="/websiteImages/doctor-and-patient.png"
              alt="Doctor and Patient"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-40 sm:top-[220px] lg:top-[220px] xl:top-[300px] left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
                <span className="text-yellow-500 text-2xl">😊</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">84k+</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-2 mx-auto  sm:w-[550px] lg:w-[440px] xl:w-[580px] 2xlg:w-auto py-2 sm:pt-8 lg:pt-5 xl:pt-14 ">
          <AccordionStyle />
        </div>
      </div>
    </div>
  );
}
