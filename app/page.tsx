import React from "react";
import { Metadata } from "next";
import Hero from "@/components/landing/hero/Hero";
import BookAppointment from "@/components/landing/book-appointment/InstantAppointment";
import Partners from "@/components/landing/partners/Partners";
import About from "@/components/landing/about/About";
import HomeTestimonialSlider from "@/components/landing/testimonial/HomeTestimonial/HomeTestimonialSlider";
import DoctorCTA from "@/components/landing/doctor/DoctorCTA";
import StartupIndia from "@/components/landing/StartupIndia/StartupIndia";
import ServiceSummary from '@/components/landing/service/serviceSummary'

export const metadata: Metadata = {
	title: "Dreach.in",
	description:
		"Dreach.in is a platform for doctors and patients to connect and communicate.",
};

const Home: React.FC = () => {
	return (
		<main>
			<div>
				<Hero />
				<BookAppointment />
				{/* <div className="flex flex-col items-center justify-center lg:py-5">
					<h1 className="lg:text-[45px] text-[35px] pb-2 pt-6 text-orange-500 font-bold ">
						Our Partners
					</h1>
					<div className="xl:w-[1200px] sm:w-[700px] lg:w-[900px] rounded-2xl max-sm:w-[350px]">
						<div className="my-10 ">
							<Partners />
						</div>
						<div className="my-10">
							<Partners />
						</div>
					</div>
				</div> */}

<StartupIndia/>
				<About />
				<DoctorCTA />

					{/* <HomeTestimonialSlider /> */}
				<ServiceSummary />
			</div>
		</main>
	);
};

export default Home;
