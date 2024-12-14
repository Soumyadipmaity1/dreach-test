'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BRAND_COLORS } from './constants';
import type { EmergencyRoomProps, EmergencySeverity } from '@/app/types/emergency';

const getSeverityVariant = (severity: EmergencySeverity) => {
  switch (severity) {
    case "Critical":
      return "destructive";
    case "Moderate":
      return "warning";
    case "Stable":
      return "default";
  }
};

export function EmergencyRoomStatus({ activeCases, availableDoctors, occupiedBeds, totalBeds }: EmergencyRoomProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold" style={{ color: BRAND_COLORS.text.primary }}>
          Emergency Room Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {activeCases.map((caseData) => (
              <div 
                key={caseData.severity}
                className="p-4 rounded-lg bg-gray-50/50"
              >
                <div className="flex justify-between items-center mb-2">
                  <Badge variant={getSeverityVariant(caseData.severity)}>
                    {caseData.severity}
                  </Badge>
                  <span className="text-2xl font-bold" style={{ color: BRAND_COLORS.text.primary }}>
                    {caseData.count}
                  </span>
                </div>
                <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
                  Avg. Wait: {caseData.avgWaitTime} min
                </p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: BRAND_COLORS.text.primary }}>
                {availableDoctors}
              </p>
              <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
                Available Doctors
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: BRAND_COLORS.text.primary }}>
                {occupiedBeds}
              </p>
              <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
                Occupied Beds
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: BRAND_COLORS.text.primary }}>
                {totalBeds}
              </p>
              <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
                Total Beds
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}