import Image from "next/image";
import type { Metadata } from "next";
import ContactUsMain from "@/components/page-components/ContactPage/ContactUsMain";

export const metadata: Metadata = {
  title: "Dreach.in | Contact Us",
  description:
    "Dreach.in is a platform for doctors and patients to connect and communicate.",
};

export default function Contact() {
  return (
    <main className="">
      <div>
        <ContactUsMain />
      </div>
    </main>
  );
}
