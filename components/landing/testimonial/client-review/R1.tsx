/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Blockquote } from "flowbite-react";

const R1 = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#F9F9F9] p-5 2xlg:h-[380px] 2xlg:w-[280px] xl:h-[440px] xl:w-[340px] rounded-xl box-shadow-testimonial">
          <div>
            <figure className=" mx-auto text-center">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <Blockquote>
                {/* <p className='text-[20px] sm:text-[18px] italic font-medium text-gray-900 dark:text-white'>
									"Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Amet impedit possimus ratione laborum ducimus iste quaerat
									beatae voluptates cum repudiandae vero iusto, corrupti debitis
									eveniet sint quia quasi non facilis."
								</p> */}
                {/* Hide this when not loading or passing arguments to fetch comments from database */}
                <div className="">
                  <div role="status" className="animate-pulse">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                    <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
                    <div className="flex items-center justify-center mt-4">
                      <svg
                        className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </Blockquote>
              {/* <figcaption className='flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse'>
								<img
									className='w-6 h-6 rounded-full'
									src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
									alt='profile picture'
								/>
								<div className='divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700'>
									<cite className='pe-3 font-medium text-gray-900 dark:text-white'>
										Michael Gough
									</cite>
								</div>
							</figcaption> */}
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default R1;
