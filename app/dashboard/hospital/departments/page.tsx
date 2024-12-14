"use client";

import React from "react";
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";
import BedSummary from "@/components/Dashboard/hospitals/BedAssign/BedSummary";
import BedAssignmentDashboard from "@/components/Dashboard/hospitals/BedAssign/BedAssignmentDashboard";
import OccupancyRateChart from "@/components/Dashboard/hospitals/BedAssign/OccupancyRateChart";
import BedUtilizationTimeline from "@/components/Dashboard/hospitals/BedAssign/BedUtilizationTimeline";
import BedTurnoverRate from "@/components/Dashboard/hospitals/BedAssign/analytics/BedTurnoverRate";
import { PredictiveOccupancy } from "@/components/Dashboard/hospitals/BedAssign/analytics/PredictiveOccupancy";
import AvailableBedsCalendar from "@/components/Dashboard/hospitals/BedAssign/AvailableBedsCalendar";

function Departments() {
  // Sample data - replace with your actual data
  const assignments = [
    { bedID: "101", patientName: "John Doe", department: "Cardiology", status: "Occupied", admissionDate: "2024-03-15", expectedDischarge: "2024-03-20", priority: "High", nurseAssigned: "Sarah Johnson" },
    // Add more assignments...
  ];

  const departmentStats = [
    { department: "Cardiology", occupancyRate: 85 },
    { department: "Neurology", occupancyRate: 70 },
    // Add more stats...
  ];

  const utilizationData = [
    { date: "2024-03-15", emergency: 30, planned: 50, maintenance: 20 },
    // Add more data...
  ];

  const turnoverData = [
    { department: "Cardiology", turnoverRate: 4.2, avgStayDuration: 5.3 },
    // Add more data...
  ];

  const predictionData = [
    { date: "2024-03-15", predicted: 85, actual: 82 },
    // Add more data...
  ];

  const bedSummaryData = {
    totalBeds: 200,
    occupied: 165,
    available: 35,
    maintenance: 8,
    cleaning: 5,
    reserved: 12,
    emergency: 6,
    waitingList: 15,
    dischargeToday: 12,
    admissionToday: 8,
    averageStay: 4.5,
    occupancyTrend: 2.5
  };

  return (
    <div className="min-h-screen">
      <div className="p-4 lg:p-6 space-y-6">
        {/* Top Summary Section */}
        <div className="mb-6">
          <BedSummary data={bedSummaryData} />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Bed Assignment Table */}
            <div className="bg-white rounded-xl shadow-sm">
              <BedAssignmentDashboard assignments={assignments} />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Occupancy Chart */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: BRAND_COLORS.text.primary }}>
                  Department Occupancy
                </h3>
                <div className="h-[300px]"> {/* Fixed height container */}
                  <OccupancyRateChart data={departmentStats} />
                </div>
              </div>

              {/* Utilization Chart */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: BRAND_COLORS.text.primary }}>
                  Utilization Trends
                </h3>
                <div className="h-[300px]"> {/* Fixed height container */}
                  <BedUtilizationTimeline data={utilizationData} />
                </div>
              </div>
            </div>

            {/* Additional Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <BedTurnoverRate data={turnoverData} />
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <PredictiveOccupancy predictions={predictionData} />
              </div>
            </div>
          </div>

          {/* Right Column - Calendar and Quick Stats */}
          <div className="space-y-6">
            {/* Calendar Widget */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <AvailableBedsCalendar availableBeds={[]} />
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((_, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 border-l-4"
                  style={{ borderLeftColor: BRAND_COLORS.primary }}
                >
                  {/* Add quick stat content */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium" style={{ color: BRAND_COLORS.text.secondary }}>
                        Stat Title {index + 1}
                      </h4>
                      <p className="text-2xl font-bold mt-1" style={{ color: BRAND_COLORS.text.primary }}>
                        {85 + index}%
                      </p>
                    </div>
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${BRAND_COLORS.primary}10` }}
                    >
                      {/* Add icon here */}
                    </div>
                  </div>
            </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
