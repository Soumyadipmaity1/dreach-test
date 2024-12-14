import React from 'react';
import { BedAssignmentTable } from '../components/BedAssignmentTable';
import { OccupancyChart } from '../components/OccupancyChart';
import { UtilizationChart } from '../components/UtilizationChart';
import { useDashboard } from '../context/DashboardContext';

export function MainContent({ assignments, departmentStats, utilizationData }) {
  const { state } = useDashboard();

  return (
    <div className="flex-grow space-y-6">
      <BedAssignmentTable data={assignments} />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <OccupancyChart data={departmentStats} />
        <UtilizationChart data={utilizationData} />
      </div>
    </div>
  );
} 