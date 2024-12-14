'use client';

import React from "react";
import dynamic from 'next/dynamic';

const ChartWrapper = dynamic(() => import('./ChartWrapper'), { ssr: false });
const MedicationChart = dynamic(() => import('./MedicationChart'), { ssr: false });

const MedicationEffectiveness: React.FC = () => {    
  return (
    <div className="medication-effectiveness">
      <ChartWrapper>
        <MedicationChart />
      </ChartWrapper>
    </div>
  );
};

export default MedicationEffectiveness;