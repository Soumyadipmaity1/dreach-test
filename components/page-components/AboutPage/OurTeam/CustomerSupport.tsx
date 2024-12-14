import React from "react";
import Image from "next/image";
const memberData = [
  {
    position: "UI/UX ",
    title: "Rewant Raj",
    imgSrc: "/websiteImages/Rewant v1.1.png",
  },
  {
    position: "UI/UX ",
    title: "Rewant Raj",
    imgSrc: "/websiteImages/Rewant v1.1.png",
  },
  {
    position: "UI/UX ",
    title: "Rewant Raj",
    imgSrc: "/websiteImages/Rewant v1.1.png",
  },
  {
    position: "UI/UX ",
    title: "Rewant Raj",
    imgSrc: "/websiteImages/Rewant v1.1.png",
  },
];

const CustomerSupportPost = ({
  position,
  title,
  imgSrc,
}: {
  position: string;
  title: string;
  imgSrc: string;
}) => (
  <div className="lg:w-60 w-40 lg:m-5 m-3 h-auto bg-slate-white shadow-md hover:text-white hover:bg-[#31addb] border-2 border-[#125875] rounded-md">
    <div className="relative rounded-t-md image bg-[#4a4950] overflow-hidden">
      <Image
        width={144}
        height={144}
        className="w-full rounded-t-md lg:h-auto h-40 transition-transform duration-300 transform hover:scale-110"
        src={imgSrc}
        alt="leadImage"
        sizes="100vw"
        layout="responsive"
      />
      <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
    </div>
    <div className="p-5 relative text-div">
      <h3 className="text-center font-bold text-[15px] sm:[17px]  lg:text-[20px]">
        {title}
      </h3>
      {/* <h4 className="text-sm font-bold text-orange-500 text-center m-1">{roll}</h4> */}

      <h4 className="text-center m-2 text-[#125875] text-[12px]  lg:text-base font-bold">
        {position}
      </h4>
    </div>
  </div>
);

const CustomerSupport = () => (
  <div className="flex justify-center flex-wrap">
    {memberData.map((post, index) => (
      <CustomerSupportPost
        key={index}
        position={post.position}
        title={post.title}
        imgSrc={post.imgSrc}
      />
    ))}
  </div>
);

export default CustomerSupport;
