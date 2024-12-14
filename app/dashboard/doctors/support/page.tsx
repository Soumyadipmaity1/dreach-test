import ContactUs from "@/components/Dashboard/doctors/support/ContactUs";
import KnowledgeBase from "@/components/Dashboard/doctors/support/KnowledgeBase";
import SupportRequestForm from "@/components/Dashboard/doctors/support/SupportForm";
import SupportStatus from "@/components/Dashboard/doctors/support/SupportStatus";
import React from "react";

const Support: React.FC = () => {
  return (
    <main className="bg-[#c1efffbe]  p-8">
      <SupportStatus />
      <SupportRequestForm />
      <KnowledgeBase />
      <ContactUs />
    </main>
  );
};

export default Support;
