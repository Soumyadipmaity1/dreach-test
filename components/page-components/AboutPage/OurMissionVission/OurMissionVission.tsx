import React from "react";
import Image from "next/image";
import Image1 from "./vision.png";
import Image2 from "./ourMission.png";

const OurMissionVision = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full 2xlg:w-[47%] lg:w-[51%] xl:w-[50%]">
        <div>
          <Image
            src={Image1}
            alt="Factory"
            width={144}
            height={144}
            className="w-full h-auto"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="p-10 bg-[#22cad7] text-white ">
          <h2 className="text-4xl font-bold xl:mb-5 sm:text-start text-center mb-8">
            Our Mission
          </h2>
          <ul className="list-disc text-[17px] text-gray-700 font-medium pl-10">
            <li>
              {" "}
              <span className="font-bold text-black/70 text-[18px]">
                Healthcare for Everyone:
              </span>{" "}
              Healthcare for Everyone: We dream of a world where everyone, no
              matter where they are, has easy access to great healthcare.
            </li>
            <li>
              {" "}
              <span className="font-bold text-black/70 text-[18px]">
                Leading the Way:
              </span>{" "}
              We're excited to create new ways to make remote care simpler and
              more effective for everyone.
            </li>
            <li>
              {" "}
              <span className="font-bold text-black/70 text-[18px]">
                Care with a Heart:
              </span>
              Our focus is on making every patient feel valued and heard,
              offering care that’s as personal and compassionate as it is
              professional.
            </li>
            <li>
              {" "}
              <span className="font-bold text-black/70 text-[18px]">
                Global Meets Local:
              </span>
              At Dr. Reach, we bring together local physicians and global
              experts to ensure you get the best insights and care possible.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full xl:w-[50%] 2xlg:w-[57%] lg:w-[52%] flex flex-col">
        <div className="p-10">
          <h2 className="text-4xl text-[#125875] xl:pt-5 sm:text-start text-center 2xlg:pt-0 pt-6 font-bold mb-4">
            Our Vision
          </h2>
          <ul className="list-disc pl-5 text-[#125875] dark:text-slate-300 font-medium text-[17px]">
            <li>
              <span className="font-bold text-[18px]">
                Easy Access for All:
              </span>{" "}
              We want to make sure that everyone has access to the high-quality
              healthcare they need, no matter where they live.
            </li>
            <li>
              <span className="font-bold text-[18px]">
                Blending Virtual and Real:
              </span>{" "}
              We work to combine online and in-person treatment to give you the
              most thorough and effective care possible.
            </li>
            <li>
              <span className="font-bold text-[18px]">
                Saving You Time and Money:
              </span>
              By optimizing the system and cutting expenses, we hope to lessen
              the time and financial strain associated with obtaining medical
              treatment.
            </li>
            <li>
              <span className="font-bold text-[18px]">
                Bringing Experts Together :
              </span>{" "}
              : By bringing together local doctors and foreign specialists, we
              offer a wider variety of viewpoints and top-notch care.
            </li>
          </ul>
        </div>
        <div className="xl:mt-[22px] 2xlg:mt-1 mt-4 lg:mt-[14px]">
          <Image
            src={Image2}
            alt="Doctor examines sick kid"
            width={640}
            height={350}
            className="mx-auto"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurMissionVision;
