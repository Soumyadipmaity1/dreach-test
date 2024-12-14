import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
export const About2ndPart = () => {
  return (
    <div className="p-3 xl:px-32 2xlg:px-20 my-20 lg:px-10 sm:px-12 ">
      <h1 className="text-[34px] lg:text-[40px] font-bold  leading-10 text-[#125872] text-center">
        Who we are
      </h1>

      <div className="flex flex-col lg:flex-row  justify-between items-center xl:px-20 xl:space-x-20">
        <div className="lg:w-1/3 flex items-center justify-center ">
          <Image
            src="/websiteImages/About2ndPart.png"
            alt=""
            width={440}
            height={440}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="lg:w-2/3 p-4">
          <p className="  text-[18px] sm:text-[20px] xl:text-[23.5px]   pb-10  text-justify">
            We work towards providing the best treatment for all with minimal
            cost. No matter where they live. Dr. Reach, which, true to its name,
            works in bringing virtual and physical attributes together and
            delivering great healthcare treatment.
          </p>
          <Link href="#">
            <button className="bg-[#125872] px-5 py-3 items-center rounded-full flex text-[18px] font-bold hover:bg-[#2da3cf] text-white">
              Connect With Us{" "}
              <div className="pl-2">
                <FaArrowRight />
              </div>
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About2ndPart;
