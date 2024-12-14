"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderSettings } from "@/@types/interface/Interface";
import TestimonialCard from "./HomeTestimonialCard";

const HomeTestimonialSlider: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="container mx-auto p-5 sm:p-16 py-10 pb-16 sm:pb-20">
      <h1 className="text-center text-orange-500 text-4xl sm:text-5xl font-bold mb-10">
        Happy Stories
      </h1>
      <h2 className="text-xl text-center px-8 mt-5  sm:mt-10 font-semibold mb-2 sm:mb-8 text-black dark:text-white">
        Creating Vibrant Smiles for Healthy Lifestyles!
      </h2>

      <div className="lg:hidden block custom-dots">
        <Slider {...settings}>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card1" />
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card3" />
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card2" />
            </div>
          </div>
        </Slider>
      </div>

      <div className="hidden lg:block custom-dots">
        <Slider {...settings}>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card1" />
              <TestimonialCard cardType="card2" />
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card3" />
              <TestimonialCard cardType="card1" />
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card2" />
              <TestimonialCard cardType="card3" />
            </div>
          </div>
        </Slider>
      </div>

      <style jsx>{`
        :global(.custom-dots .slick-dots li button:before) {
          color: #000;
        }
        :global(.dark .custom-dots .slick-dots li button:before) {
          color: #cbd5e1; /* slate-300 */
        }
      `}</style>
    </div>
  );
};

export default HomeTestimonialSlider;
