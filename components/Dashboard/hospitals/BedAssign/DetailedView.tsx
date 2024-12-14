import React from 'react';
import { Card } from "@/components/ui/card";
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";
import { Line, Bar } from "react-chartjs-2";
import { 
  X, Clock, Users, Bed, AlertTriangle, 
  TrendingUp, ArrowRight, Calendar 
} from "lucide-react";
import { motion } from "framer-motion";
import { DepartmentStat } from './types';

interface Props {
  stat: DepartmentStat;
  onClose: () => void;
}

export default function DetailedView({ stat, onClose }: Props) {
  // Sample historical data
  const historicalData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    occupancy: [75, 82, 78, 85, 80, 88],
    turnover: [4.2, 4.5, 4.1, 4.8, 4.3, 4.6],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: BRAND_COLORS.text.primary }}>
              {stat.department} Details
            </h2>
            <p className="text-sm mt-1" style={{ color: BRAND_COLORS.text.secondary }}>
              Detailed statistics and analytics
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} style={{ color: BRAND_COLORS.text.secondary }} />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <QuickStat
            icon={<Bed size={20} />}
            label="Total Beds"
            value={stat.totalBeds}
            trend={2.5}
          />
          <QuickStat
            icon={<Users size={20} />}
            label="Current Occupancy"
            value={`${Math.round((stat.occupied / stat.totalBeds) * 100)}%`}
            trend={-1.2}
          />
          <QuickStat
            icon={<Clock size={20} />}
            label="Avg Wait Time"
            value="45m"
            subtitle="minutes"
          />
          <QuickStat
            icon={<AlertTriangle size={20} />}
            label="Critical Cases"
            value={3}
            urgent
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4" style={{ color: BRAND_COLORS.text.primary }}>
              Historical Occupancy
            </h3>
            <Line
              data={{
                labels: historicalData.labels,
                datasets: [{
                  label: 'Occupancy Rate',
                  data: historicalData.occupancy,
                  borderColor: BRAND_COLORS.chart.primary,
                  backgroundColor: `${BRAND_COLORS.chart.primary}20`,
                  tension: 0.4,
                  fill: true,
                }]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                  },
                },
              }}
            />
          </Card>

          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4" style={{ color: BRAND_COLORS.text.primary }}>
              Bed Turnover Rate
            </h3>
            <Bar
              data={{
                labels: historicalData.labels,
                datasets: [{
                  label: 'Turnover Rate',
                  data: historicalData.turnover,
                  backgroundColor: BRAND_COLORS.chart.secondary,
                }]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </Card>
        </div>

        {/* Upcoming Schedule */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4" style={{ color: BRAND_COLORS.text.primary }}>
            Upcoming Bed Assignments
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <ScheduleItem
                key={index}
                time="09:30 AM"
                patient="John Doe"
                type="Admission"
                bedNumber="A-103"
              />
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{ 
              backgroundColor: `${BRAND_COLORS.primary}10`,
              color: BRAND_COLORS.primary 
            }}
          >
            View Full Report
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            Manage Department
          </button>
        </div>
      </Card>
    </motion.div>
  );
}

function QuickStat({ icon, label, value, trend, subtitle, urgent }: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  trend?: number;
  subtitle?: string;
  urgent?: boolean;
}) {
  return (
    <div className="p-4 rounded-lg" style={{ backgroundColor: `${BRAND_COLORS.primary}10` }}>
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: BRAND_COLORS.primary }}>{icon}</span>
        {urgent && (
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        )}
      </div>
      <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>{label}</p>
      <div className="flex items-baseline gap-1">
        <p className="text-xl font-semibold" style={{ color: BRAND_COLORS.text.primary }}>
          {value}
        </p>
        {subtitle && (
          <span className="text-xs" style={{ color: BRAND_COLORS.text.secondary }}>
            {subtitle}
          </span>
        )}
      </div>
      {trend && (
        <p className="text-xs mt-1" style={{ 
          color: trend > 0 ? '#10B981' : '#EF4444'
        }}>
          <TrendingUp size={12} className="inline mr-1" />
          {Math.abs(trend)}% from last month
        </p>
      )}
    </div>
  );
}

function ScheduleItem({ time, patient, type, bedNumber }: {
  time: string;
  patient: string;
  type: string;
  bedNumber: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium" style={{ color: BRAND_COLORS.text.primary }}>
            {time}
          </span>
          <span className="text-xs" style={{ color: BRAND_COLORS.text.secondary }}>
            {type}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium" style={{ color: BRAND_COLORS.text.primary }}>
            {patient}
          </span>
          <span className="text-xs" style={{ color: BRAND_COLORS.text.secondary }}>
            Bed {bedNumber}
          </span>
        </div>
      </div>
      <ArrowRight size={16} style={{ color: BRAND_COLORS.text.secondary }} />
    </div>
  );
} 