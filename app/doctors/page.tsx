import type { Metadata } from "next";
import FAQ from "@/components/page-components/ServicePage/FAQ/FAQ";
import DocFooter from "@/components/page-components/DoctorsPage/DocFooter";
import DoctorList from "@/components/page-components/DoctorsPage/doctorCardNew";
import SearchAndFilters from "@/components/page-components/DoctorsPage/SearchAndFilters";
import DoctorHero from "@/components/page-components/DoctorsPage/DoctorHero";
import DoctorFeatured from "@/components/page-components/DoctorsPage/DoctorFeatured";

export const metadata: Metadata = {
  title: "Dreach.in | Doctors",
  description:
    "Dreach.in is a platform for doctors and patients to connect and communicate.",
};

export default function Doctors() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        {/* <Banner /> */}
<DoctorHero />
<DoctorFeatured />
        <div className="mb-8 px-4">
          <SearchAndFilters />
        </div>

        <DoctorList />

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <FAQ />
        </div>
        
        <div className="mt-8">
          <DocFooter />
        </div>
      </div>
    </main>
  );
}
