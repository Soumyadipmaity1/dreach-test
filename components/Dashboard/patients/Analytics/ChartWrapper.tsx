'use client';

import React from 'react';

const ChartWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="chart-wrapper">{children}</div>;
};

export default ChartWrapper;