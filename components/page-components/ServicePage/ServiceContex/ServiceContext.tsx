"use client";

import { FaPrescription } from "react-icons/fa";
import React, { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface DashboardDataItem {
	icon: ReactNode | string | IconType;
	id: number;
	title: string;
}

const dashboardData: DashboardDataItem[] = [
	{
		id: 1,
		title: "Overview",
		icon: "📊",
	},
	{
		id: 2,
		title: "Appointments",
		icon: "📅",
	},
	{
		id: 3,
		title: "Medical Records",
		icon: "🗃️",
	},
	{
		id: 4,
		title: "Prescriptions",
		icon: <FaPrescription className={`text-gray-600`} />,
	},
	{
		id: 5,
		title: "Lab Results",
		icon: "🔬",
	},
	{
		id: 6,
		title: "Billing",
		icon: "💳",
	},
	{
		id: 7,
		title: "Messages",
		icon: "💬",
	},
	{
		id: 8,
		title: "Pharmacy",
		icon: "💊",
	},
];

const ServiceContext: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		const scrollContent = scrollContainer.firstElementChild as HTMLElement;
		if (!scrollContent) return;

		const scrollWidth = scrollContent.scrollWidth;
		const containerWidth = scrollContainer.clientWidth;

		const animateScroll = () => {
			if (scrollContainer.scrollLeft >= scrollWidth - containerWidth) {
				scrollContainer.scrollLeft = 0;
			} else {
				scrollContainer.scrollLeft += 1;
			}
			requestAnimationFrame(animateScroll);
		};

		const animationId = requestAnimationFrame(animateScroll);

		return () => cancelAnimationFrame(animationId);
	}, []);

	return (
		<main className={`p-4 lg:px-24`}>
			<div className={`bg-slate-200 dark:bg-slate-900 rounded-xl p-4 px-8`}>
				<h1 className={`text-2xl font-bold mt-2 mb-2 text-[#125872] dark:text-[#31addb]`}>
					Patient Dashboard: Keep a track on your health
				</h1>
				<p className={`mb-2 text-base text-slate-600 dark:text-slate-400`}>
					Our user-friendly Patient Dashboard makes managing your health easy.
					Here's what you can find:
				</p>
				<div className={`hidden md:block`}>
					<div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-8`}>
						{dashboardData.map((info, index) => (
							<div
								key={index}
								className={`flex flex-col gap-2 items-center transition-all duration-300 ease-in-out scale-100 hover:scale-105`}>
								<div className={`text-6xl`}>{info.icon as React.ReactNode}</div>
								<p>{info.title}</p>
							</div>
						))}
					</div>
				</div>
				{/* For Mobiles */}
				<div className={`md:hidden`}>
					<div ref={scrollRef} className={`overflow-hidden`}>
						<div className={`flex gap-6`}>
							{[...dashboardData, ...dashboardData].map((info, index) => (
								<div
									key={`${info.id}-${index}`}
									className={cn(
										"flex-shrink-0 px-1",
										"transition-all duration-300 ease-in-out hover:scale-110"
									)}>
									<div className={`flex flex-col gap-2 items-center`}>
										<div className={`text-4xl`}>
											{info.icon as React.ReactNode}
										</div>
										<p>{info.title}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ServiceContext;
