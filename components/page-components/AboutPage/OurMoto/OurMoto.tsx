import React from "react";
import Image from "next/image";

interface CardProps {
	src: string;
	alt: string;
	title: string;
	text: string;
}

const Card: React.FC<CardProps> = ({ src, alt, title, text }) => (
	<div className="w-80 sm:w-[500px] lg:w-76 icon-ani cursor-pointer text-white rounded-sm flex flex-col justify-center items-center p-6 sm:p-8 lg:p-6 xl:p-8 sm:py-10 lg:py-6 card">
		<Image
			src={src}
			alt={alt}
			width={200}
			height={200}
			className="w-[150px] sm:w-[170px]  flex justify-center items-center"
			style={{
				maxWidth: "100%",
				height: "auto",
			}}
		/>
		<h1 className="m-4 font-bold text-[28px] text-[#ff6309] ">{title}</h1>
		<p className="text-justify text-[15px] md:text-[15px]">{text}</p>
	</div>
);

const data: CardProps[] = [
	{
		src: "/images/Ellipse1.png",
		alt: "banner image",
		title: "Mission",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi mollitia ad aperiam natus quam voluptates sint adipisci laborum ut quisquam vel, optio ex totam, quas consectetur ea sit quis sunt natus quam voluptates sint adipisci laborum ut quisquam vel, optio ex totam, quas consectetur ea sit quis sunt",
	},
	{
		src: "/images/Ellipse2.png",
		alt: "banner image",
		title: "Vision",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi mollitia ad aperiam natus quam voluptates sint adipisci laborum ut quisquam vel, optio ex totam, quas consectetur ea sit quis sunt natus quam voluptates sint adipisci laborum ut quisquam vel, optio ex totam, quas consectetur ea sit quis sunt",
	},
	{
		src: "/images/Ellipse3.png",
		alt: "banner image",
		title: "Value",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi mollitia ad aperiam natus quam voluptates sint adipisci laborum ut quisquam vel, optio ex totam, quas consectetur ea sit quis sunt natus quam voluptates sint adipisci laborum ut quisquam vel, optio ex totam, quas consectetur ea sit quis sunt",
	},
];

const OurMoto: React.FC = () => (
	<div className="p-5 sm:mb-10 sm:p-0 lg:px-10 2xlg:px-16 xl:px-24 flex flex-col lg:flex-row justify-evenly items-center gap-8 mt-6 sm:mt-2 2xlg:m-5 2xlg:mb-12 ">
		{data.map(({ src, alt, title, text }, index) => (
			<Card key={index} src={src} alt={alt} title={title} text={text} />
		))}
	</div>
);

export default OurMoto;
