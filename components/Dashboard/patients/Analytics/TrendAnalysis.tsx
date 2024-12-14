'use client';

import React from "react";
import dynamic from 'next/dynamic';

const ChartWrapper = dynamic(() => import('./ChartWrapper'), { ssr: false });
const TrendChart = dynamic(() => import('./TrendChart'), { ssr: false });

const TrendAnalysis: React.FC = () => {
  return (
    <div className="trend-analysis">
      <ChartWrapper>
        <TrendChart />
      </ChartWrapper>
    </div>
  );
};

export default TrendAnalysis;