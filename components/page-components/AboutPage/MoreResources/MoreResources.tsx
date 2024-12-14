import { MdInsights } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";

export default function MoreResources() {
  return (
    <div className="flex flex-col justify-center items-center sm:my-20 my-12 px-4">
      <h1 className="text-[32px]  xl:text-[42px] lg:text-[38px] text-[#125872] font-semibold text-center xl:mb-10 lg:mb-5">
        More Resources
      </h1>
      <div className=" flex-wrap justify-center grid sm:flex grid-cols-2 items-center gap-10 lg:gap-20 sm:mt-10 mt-8">
        <div className="flex flex-col justify-center items-center">
          <MdInsights className="text-[40px] md:text-[50px] text-orange-500" />
          <h2 className="text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px]  mt-2 font-semibold text-[#125872] ">
            Our Insights
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaMapLocationDot className="text-[40px] md:text-[50px] text-orange-500" />
          <h2 className="text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px]  mt-2 font-semibold text-[#125872] ">
            Our Location
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <RiTeamFill className="text-[40px] md:text-[50px] text-orange-500" />
          <h2 className="text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px]  mt-2 font-semibold text-[#125872] ">
            Our Team
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <RiTeamFill className="text-[40px] md:text-[50px] text-orange-500" />

          <h2 className="text-[16px] md:text-[20px] lg:text-[24px]">Careers</h2>
        </div>
      </div>
    </div>
  );
}
