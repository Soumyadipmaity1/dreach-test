import React from "react";
import SiteManagerDashboard from "@/components/Dashboard/admin/sitemanager/SiteManagerDashboard";

const SiteManager: React.FC = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Site Manager</h1>
      <SiteManagerDashboard />
    </main>
  );
};

export default SiteManager;
