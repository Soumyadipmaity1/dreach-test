/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="bg-[#125872] ">
      <div className="w-[100%] p-6 md:p-4">
        <div className="pt-8 pb-4">
          <h1 className="lg:text-5xl text-4xl text-[#ff7c25] pb-8 text-center font-bold">
            About Us
          </h1>
          <div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-[100%] xl:w-[80%] 2xlg:w-[90%] mx-auto rounded-xl">
            <div className="p-2 md:p-8">
              <h1 className="lg:text-[30px] text-[28px] font-semibold text-white  capitalize">
                Complete medical solutions in one place and good health
              </h1>
              <div className="sm:mx-28 md:mx-auto">
                <div
                  role="status"
                  className="max-w-lg animate-pulse pt-[2.5rem] md:pr-[3rem]"
                >
                  <div className="">
                    <p className="text-[18px] text-white">
                      Our mission is to deliver premium and reliable healthcare
                      services at an affordable cost, ensuring accessibility for
                      everyone across the country. We are committed to making
                      quality healthcare available to all, regardless of their
                      location or income.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 text-[#00feff] ml-8 pt-8 ">
                  <ul className="list-disc p-2 text-[18px]  font-semibold">
                    <li>Physician partnership for patient care</li>
                  </ul>
                  <ul className="list-disc p-2 text-[18px]  font-semibold">
                    <li>Book now, know your wait</li>
                  </ul>
                  <ul className="list-disc p-2 text-[18px]  font-semibold">
                    <li>Choose your comfort: video or text</li>
                  </ul>
                  <ul className="list-disc p-2 text-[18px]  font-semibold">
                    <li>Multi-specialist diagnosis for accuracy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:block xl:pt-10 2xlg:pt-8 lg:pt-20 sm:pt-[65px]">
              <div className="grid grid-cols-2 pt-8 lg:w-[60%] items-center justify-center lg:ml-32 sm:ml-16">
                <div className="row-span-2">
                  <img
                    src="/websiteImages/banner_img.png"
                    className="rounded-full w-[120px] h-[120px] bg-white"
                    alt="..."
                  />
                </div>
                <div className="row-span-1 pb-16">
                  <img
                    src="/websiteImages/banner_img.png"
                    className="rounded-full w-[120px] h-[120px] bg-white"
                    alt="..."
                  />
                </div>
                <div className="row-span-1">
                  <img
                    src="/websiteImages/banner_img.png"
                    className="rounded-full w-[120px] h-[120px] bg-white"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
