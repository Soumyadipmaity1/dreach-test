import React from "react";
import Image from "next/image";

interface FounderCardProps {
	name: string;
	title: string;
	bio: string;
	imageSrc: string;
	socialLinks: { icon: string; url: string }[];
	reverse?: boolean;
	classNames?: string;
}

const FounderCard: React.FC<FounderCardProps> = ({
	name,
	title,
	bio,
	imageSrc,
	socialLinks,
	reverse = false,
	classNames = "",
}) => {
	return (
		<div
			className={`flex flex-col  md:flex-row bg-[#135872]  ${reverse ? "md:flex-row-reverse border-r-8 border-[#5db9e3]" : "border-l-8 border-[#5db9e3]"} bg-cardBg  overflow-hidden shadow-lg mb-12 transform transition duration-300 hover:translate-y-1 hover:shadow-2xl`}
		>
			<div className="relative my-auto md:h-auto md:w-[400px]">
				<Image
					src={imageSrc}
					width={10}
					height={10}
					alt={`${name}, ${title}`}
					layout="responsive"
					className="transition-transform duration-500 p-5 h-40 transform hover:scale-105"
				/>
			</div>
			<div className="lg:px-10 p-5 text-justify sm-text-start flex flex-col justify-center md:w-full">
				<h2 className=" text-2xl mb-2 text-[#00feff] font-bold">{name}</h2>
				<p className=" text- text-orange-500 font-bold mb-4">{title}</p>
				<p className={`text-md text-gray-200 leading-relaxed mb-6 ${classNames}`}>{bio}</p>
				<div className="flex space-x-5">
					{socialLinks.map((link, index) => (
						<a
							key={index}
							href={link.url}
							className="text-primary text-xl transition-colors duration-300 hover:text-secondary transform hover:translate-y-1">
							<i className={`fab ${link.icon}`}></i>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default FounderCard;
