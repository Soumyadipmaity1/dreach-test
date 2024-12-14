import React from 'react';
import AvailableBedsCalendar from './AvailableBedsCalendar';
import BedTurnoverRate from './analytics/BedTurnoverRate';
import PredictiveOccupancy from './analytics/PredictiveOccupancy';
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";

interface SidePanelProps {
  availableBeds: any[];
  turnoverData: any[];
  predictions: any[];
}

export function SidePanel({ availableBeds, turnoverData, predictions }: SidePanelProps) {
  return (
    <div className="space-y-8">
      {/* Calendar Widget */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <AvailableBedsCalendar availableBeds={availableBeds} />
      </div>

      {/* Analytics Widgets */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <BedTurnoverRate data={turnoverData} />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <PredictiveOccupancy predictions={predictions} />
        </div>
      </div>
    </div>
  );
} 