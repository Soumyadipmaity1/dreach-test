"use client"

import React from "react";
import { Overview } from "@/components/Dashboard/patients/Overview";

const PatientDashboard: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-5">
      <Overview />
    </main>
  );
};

export default PatientDashboard;
