/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " Dreach.in | Careers",
  description:
    "Dreach.in is a platform for doctors and patients to connect and communicate.",
};

const Careers: React.FC = () => {
  return (
    <main className="">
      <div className="pb-12">
        <section className="w-full flex justify-center bg-gradient-to-r from-[#125872] via-[#1cb7ef] to-[#1cb7ef] text-white text-center">
          <div className="careers-container w-full justify-center px-5 flex flex-col">
            <h1 className="sm:text-4xl text-3xl font-[800] mb-4">
              Join Our Mission to Transform Healthcare
            </h1>
            <p className="sm:text-lg text-base font-[500]">
              Be part of a team that's revolutionizing healthcare accessibility
              through AI-powered tele medicine
            </p>
          </div>
        </section>
        <main className=" flex-col flex justify-center sm:px-10 px-5 py-16 sm:py-20">
          <h2 className="text-3xl text-center font-bold mb-8 text-orange-600">
            Current Openings
          </h2>
          <div className="bg-offer rounded-xl border-[3px] border-[#06a3ae] text-center xl:mx-40 xl:p-8 xl:px-14 p-5 py-8">
            <h3 className="text-lg font-bold mb-6 text-[#fff] ">
              <span className="bg-[#f97316] px-4 py-1 rounded pb-1.5">
                No Positions Currently Available
              </span>
            </h3>
            <p className="text-base text-white xl:px-20 m-2">
              We're not actively hiring at the moment, but we're always
              interested in connecting with talented individuals who are
              passionate about our mission.
            </p>
            <a
              href="https://www.linkedin.com/company/dreach/"
              className="careers-button bg-[#fff] text-black px-6 py-1.5 hover:text-white"
            >
              Join Our Waitlist
            </a>
          </div>
        </main>
        <section className=" flex justify-center 2xl:px-20 xl:px-16 lg:px-10 sm:px-16 px-5 py-20">
          <div className="">
            <h2 className="text-3xl xl:mb-20 mb-12 text-center font-bold text-orange-600">
              Why Join Dr. Reach - Healthunity Solutions Pvt Ltd?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              <div className="benefits-item dark:bg-[#1e1e1e]">
                <div className="benefits-icon">🚀</div>
                <h3 className="text-[#1782B0] m-2">Innovative Work</h3>
                <p>Be at the forefront of AI and telemedicine advancements</p>
              </div>
              <div className="benefits-item dark:bg-[#1e1e1e]">
                <div className="benefits-icon">💰</div>
                <h3 className="text-[#1782B0] m-2">Competitive Package</h3>
                <p>
                  Attractive salary, equity options, and comprehensive benefits
                </p>
              </div>
              <div className="benefits-item dark:bg-[#1e1e1e]">
                <div className="benefits-icon">🌱</div>
                <h3 className="text-[#1782B0] m-2">Growth Opportunities</h3>
                <p>Continuous learning, mentorship, and career development</p>
              </div>
              <div className="benefits-item dark:bg-[#1e1e1e]">
                <div className="benefits-icon">🏋️</div>
                <h3 className="text-[#1782B0] m-2">Work-Life Balance</h3>
                <p>Flexible work arrangements and wellness programs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Careers;
