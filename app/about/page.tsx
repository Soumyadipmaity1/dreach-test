import Image from "next/image";
import type { Metadata } from "next";
import { About2ndPart } from "@/components/page-components/AboutPage/About2ndPart/About2ndPart";
import OurMissionVision from "@/components/page-components/AboutPage/OurMissionVission/OurMissionVission";
import Timeline from "@/components/page-components/AboutPage/TimeLine/TimeLine";
import OurTeam from "@/components/page-components/AboutPage/OurTeam/OurTeam";
import FounderSection from "@/components/page-components/AboutPage/Leadership/FounderSection";

export const metadata: Metadata = {
	title: "Dreach.in | About Us",
	description:
		"Dreach.in is a platform for doctors and patients to connect and communicate.",
};

export default function AboutUs() {
	return (
		<main className="">
			<div className="about">
				<div className="about-hero">
					<div className="">
						<h1 className="">Welcome to Dr. Reach</h1>
						<p className="">
							Revolutionizing healthcare management for a better tomorrow
						</p>
					</div>
				</div>

				<About2ndPart />
				<OurMissionVision />
				<FounderSection />

				<h1 className="text-center sm:text-5xl text-4xl font-bold  text-[#125875] mb-10 ">
					Our Journey
				</h1>
				<div className="justify-center flex ">
					<Timeline />
				</div>

				<OurTeam />
			</div>
		</main>
	);
}
