import React from "react";
import Image from "next/image";
const memberData = [
  {
    position: "CTO & Frontend Lead",
    title: "Sudeepta Sarkar",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373692/Sudeepta_Sarkar_rslip6.jpg",
  },
  {
    position: "CMO",
    title: "Aneesh Ghosh",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725470871/Aneesh_Ghosh_arjvz4.png",
  },
  {
    position: "HR Manager",
    title: "Shilpi Sinha",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725470879/Shilpi_Sinha_blo0fi.png",
  },
  {
    position: "R & D Head ",
    title: "Arbaz Hasan",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373685/Arbaz_Hasan_nryuhf.jpg",
  },
  {
    position: "Content Head ",
    title: "Tanisha Purkayastha",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725470957/Tanisha_Purkayastha_c2ata1.png",
  },
  {
    position: "CFO ",
    title: " Ayushi Singh",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373688/Ayushi_Singh_xaacjl.png",
  },
  {
    position: "CIO",
    title: "Hardik Bhosale",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725374905/Hardik_Bhosale_gb1bvi.png",
  },
];

const LeadPost = ({
  position,
  title,
  imgSrc,
}: {
  position: string;
  title: string;
  imgSrc: string;
}) => (
  <div className="sm:w-60 w-44 lg:m-5 m-3 h-auto bg-slate-white shadow-md hover:text-white hover:bg-[#31addb] border-2 border-[#125875] rounded-md">
    <div className="relative rounded-t-md sm:h-60 h-40 image bg-[#4a4950] overflow-hidden">
      <Image
        width={144}
        height={144}
        className="w-full rounded-t-md lg:h-auto  transition-transform duration-300 transform hover:scale-110"
        src={imgSrc}
        layout="responsive"
        alt="leadImage"
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

const Leads = () => (
  <div className="flex justify-center flex-wrap">
    {memberData.map((post, index) => (
      <LeadPost
        key={index}
        position={post.position}
        title={post.title}
        imgSrc={post.imgSrc}
      />
    ))}
  </div>
);

export default Leads;
