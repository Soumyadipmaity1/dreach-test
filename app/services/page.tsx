import Image from "next/image";
import type { Metadata } from "next";
import ServiceMain from "@/components/page-components/ServicePage/HeroSection/ServiceMain";
import Serve from "@/components/page-components/ServicePage/Serve/Serve";
import ServiceContext from "@/components/page-components/ServicePage/ServiceContex/ServiceContext";
import LearnMore from "@/components/page-components/ServicePage/ServiceContex/LearnMore";
import OnlineConsultation from "@/components/page-components/ServicePage/OnlineConsultation/OnlineConsultation";
import TestimonialCarousel from "@/components/page-components/ServicePage/Testimonial/TestimonialCarousel";
import FAQ from "@/components/page-components/ServicePage/FAQ/FAQ";

export const metadata: Metadata = {
  title: "Dreach.in | Service",
  description:
    "Dreach.in is a platform for doctors and patients to connect and communicate.",
};

export default function Service() {
  return (
    <main className="">
      <ServiceMain />
      <Serve />
      <ServiceContext />
      <LearnMore />
      <OnlineConsultation />
      {/* <TestimonialCarousel /> */}
      <FAQ />
    </main>
  );
}
