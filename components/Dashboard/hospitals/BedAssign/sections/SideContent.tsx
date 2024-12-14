import React from 'react';
import { TurnoverChart } from '../components/TurnoverChart';
import { PredictionChart } from '../components/PredictionChart';
import { useDashboard } from '../context/DashboardContext';

export function SideContent({ turnoverData, predictionData }) {
  const { state } = useDashboard();

  return (
    <div className="lg:w-[400px] space-y-6">
      <TurnoverChart data={turnoverData} />
      <PredictionChart data={predictionData} />
    </div>
  );
} 