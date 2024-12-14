import React from "react";
import ServiceCard from "./ServiceCard";

export const ServiceData = [
	{
		id: 1,
		icon: "👥",
		text: "Collaborative Care",
		desc: "Connect with multiple specialists in one seamless video consultation, ensuring coordinated care no matter where the experts are located.",
	},
	{
		id: 2,
		icon: "🏥",
		text: "Integrated Care",
		desc: "Book local nursing staff and specialist video consultations together for comprehensive at-home care and support.",
	},
	{
		id: 3,
		icon: "⏰",
		text: "On-Desk Appointment",
		desc: "Track your appointments in real-time, receive instant updates, and see your place in the queue.",
	},
	{
		id: 4,
		icon: "📹",
		text: "Video Consultation",
		desc: "Send symptoms or concerns ahead of time for more focused and prepared discussions with your doctor.",
	},
	{
		id: 5,
		icon: "🏠",
		text: "Home Care",
		desc: "Receive professional healthcare services at your doorstep for regular monitoring, medication help, or recovery assistance.",
	},
	{
		id: 6,
		icon: "🧪",
		text: "Lab Testing",
		desc: "Book lab tests and access results directly through your dashboard for quick and easy sharing with your doctor.",
	},
	{
		id: 7,
		icon: "💊",
		text: "Pharmacy Services",
		desc: "Order prescriptions from local pharmacies and have medications delivered right to your door.",
	},
];

const Serve: React.FC = () => {
	return (
		<main className={`p-4 lg:px-24`}>
			<div className={`gap-4`}>
				<div className={`pb-6`}>
					<h1
						className={`text-3xl lg:text-4xl font-bold text-center text-[#125872] dark:text-[#31ADDB] pb-4`}>
						Our Services
					</h1>
					<div className=" bg-[#31addb] dark:bg-[#125872] h-1 w-24 xl:w-28 mx-auto"></div>
				</div>
				<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
					{ServiceData.map((info, index) => (
						<ServiceCard
							key={index}
							icon={info.icon}
							text={info.text}
							desc={info.desc}
							className={`flex flex-col p-6 items-center justify-center gap-3 bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out scale-100 hover:scale-105`}
						/>
					))}
				</div>
			</div>
		</main>
	);
};

export default Serve;
