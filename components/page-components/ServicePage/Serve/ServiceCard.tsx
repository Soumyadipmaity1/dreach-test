import React from "react";
import { ServiceData } from "./Serve";

type ServiceCardProps = {
	icon: React.ReactNode;
	text: string;
	desc: string;
	className?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
	icon,
	text,
	desc,
	className,
}) => {
	return (
		<div className={`${className}`}>
			<span className="text-slate-400 text-[40px] md:text-[60px]">{icon}</span>
			<div className={`flex flex-col items-center`}>
				<h3 className="text-lg font-semibold text-[#125872] dark:text-[#31addb]">{text}</h3>
				<p className="text-sm text-slate-600 dark:text-slate-400 text-center">{desc}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
