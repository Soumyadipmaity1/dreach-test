import AlertSettings from "@/components/Dashboard/doctors/alerts/AlertSetting";
import AlertUpdates from "@/components/Dashboard/doctors/alerts/AlertUpdates";
import NotificationPreferences from "@/components/Dashboard/doctors/alerts/NotificationCenter";
import RecentActivities from "@/components/Dashboard/doctors/alerts/ProfileActivities";
import RecentAlerts from "@/components/Dashboard/doctors/alerts/RecentAlerts";
import React from "react";

const AlertsNotifyPage: React.FC = () => {
  return (
    <main className="bg-[#c1efffbe]  p-8">
      <AlertUpdates />
      <AlertSettings />
      <RecentAlerts />
      <NotificationPreferences />
      <RecentActivities />
    </main>
  );
};

export default AlertsNotifyPage;
