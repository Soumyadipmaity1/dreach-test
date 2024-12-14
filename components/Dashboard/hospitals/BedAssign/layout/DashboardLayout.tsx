import React from 'react';
import { MainContent } from '../sections/MainContent';
import { SideContent } from '../sections/SideContent';
import { DashboardHeader } from '../sections/DashboardHeader';
import { DashboardProvider } from '../context/DashboardContext';

interface DashboardLayoutProps {
  summaryData: any;
  mainContent: {
    assignments: any[];
    departmentStats: any[];
    utilizationData: any[];
  };
  sideContent: {
    turnoverData: any[];
    predictionData: any[];
  };
}

export function DashboardLayout({ 
  summaryData,
  mainContent,
  sideContent 
}: DashboardLayoutProps) {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto p-6 space-y-6">
          <DashboardHeader data={summaryData} />
          
          <div className="flex flex-col lg:flex-row gap-6">
            <MainContent {...mainContent} />
            <SideContent {...sideContent} />
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
} 