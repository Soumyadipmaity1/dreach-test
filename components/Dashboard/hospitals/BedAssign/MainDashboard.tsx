import React from 'react';
import BedAssignmentDashboard from './BedAssignmentDashboard';
import OccupancyRateChart from './OccupancyRateChart';
import BedUtilizationTimeline from './BedUtilizationTimeline';
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";

interface MainDashboardProps {
  assignments: any[];
  departmentStats: any[];
  utilizationData: any[];
}

export function MainDashboard({ assignments, departmentStats, utilizationData }: MainDashboardProps) {
  return (
    <div className="space-y-8">
      {/* Main Table Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 p-6">
          <BedAssignmentDashboard assignments={assignments} />
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
          <div className="mb-6">
            <h3 className="text-lg font-semibold" style={{ color: BRAND_COLORS.text.primary }}>
              Department Occupancy
            </h3>
            <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
              Current occupancy rates by department
            </p>
          </div>
          <OccupancyRateChart data={departmentStats} />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
          <div className="mb-6">
            <h3 className="text-lg font-semibold" style={{ color: BRAND_COLORS.text.primary }}>
              Utilization Trends
            </h3>
            <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
              Bed utilization patterns over time
            </p>
          </div>
          <BedUtilizationTimeline data={utilizationData} />
        </div>
      </div>
    </div>
  );
} 