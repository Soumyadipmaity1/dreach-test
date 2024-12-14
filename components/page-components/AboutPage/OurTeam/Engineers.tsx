import React from "react";
import Image from "next/image";

const memberData = [
  {
    position: "Backend Developer",
    title: " Ranjit Kumar Das",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373679/RANJIT_KUMAR_DAS_r7emt7.jpg",
  },
  {
    position: "Android Developer",
    title: " Rohan Karn",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373704/Rohan_Karn_e47vql.jpg",
  },
  {
    position: "Frontend Developer",
    title: "Soumyadip Maity",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725372902/soumyadipmaity_uwc6jg.svg",
  },
  {
    position: "Frontend Developer & UI/UX",
    title: "Shyam Barua",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373691/shyam_re1pip.jpg",
  },
  {
    position: "Frontend Developer & UI/UX",
    title: "Aniket Rouniyar",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373692/Aniket_Rouniyar_gg0hda.jpg",
  },
  {
    position: "Full-Stack Developer",
    title: "Sudev Kumar",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373683/sudev_kumar_dvpihq.jpg",
  },
  {
    position: "Full-Stack Developer",
    title: "Abhik Patra",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373679/Abhik_Patra_fqecr6.jpg",
  },
  {
    position: "UI/UX",
    title: "Deepika Kumari",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373687/Deepika_Kumari_f7y9j6.png",
  },
  {
    position: "Visual Designer",
    title: "Ayon Mondal",
    imgSrc:
      "https://res.cloudinary.com/dxjdeviz9/image/upload/v1725373716/Ayon_Mondal_x1z8pf.jpg",
  },
];

const EngineerPost = ({
  position,
  title,
  imgSrc,
}: {
  position: string;
  title: string;
  imgSrc: string;
}) => (
  <div className="lg:w-60 w-44  lg:m-5 m-3 bg-slate-white shadow-md hover:text-white hover:bg-[#31addb] border-2 border-[#125875] rounded-md">
    <div className="relative rounded-t-md sm:h-[235px] h-40 image bg-white overflow-hidden">
      <Image
        width={144}
        height={0}
        className=" rounded-t-md lg:h-auto w-full  transition-transform duration-300 transform hover:scale-110"
        src={imgSrc}
        alt="leadImage"
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

const Engineers = () => (
  <div className="flex justify-center flex-wrap">
    {memberData.map((post, index) => (
      <EngineerPost
        key={index}
        position={post.position}
        title={post.title}
        imgSrc={post.imgSrc}
      />
    ))}
  </div>
);

export default Engineers;
