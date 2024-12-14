import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";
import { motion } from "framer-motion";
import { 
  Bed, Users, Clock, AlertTriangle, 
  Activity, TrendingUp, TrendingDown,
  Calendar, CheckCircle2, XCircle
} from "lucide-react";

interface BedSummaryProps {
  data: {
    totalBeds: number;
    occupied: number;
    available: number;
    maintenance: number;
    cleaning: number;
    reserved: number;
    emergency: number;
    waitingList: number;
    dischargeToday: number;
    admissionToday: number;
    averageStay: number;
    occupancyTrend: number;
  };
}

export default function BedSummary({ data }: BedSummaryProps) {
  const occupancyRate = Math.round((data.occupied / data.totalBeds) * 100);

  return (
    <div className="space-y-6">
      {/* Main Status Card */}
      <Card className="p-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold" style={{ color: BRAND_COLORS.text.primary }}>
            Bed Status Summary
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
              Last updated: 5 mins ago
            </span>
            <button 
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              style={{ color: BRAND_COLORS.primary }}
            >
              <Activity size={20} />
            </button>
          </div>
        </div>

        {/* Occupancy Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
                Current Occupancy
              </p>
              <p className="text-3xl font-bold" style={{ color: BRAND_COLORS.primary }}>
                {occupancyRate}%
              </p>
            </div>
            <div className="flex items-center gap-2">
              {data.occupancyTrend > 0 ? (
                <TrendingUp size={20} className="text-green-500" />
              ) : (
                <TrendingDown size={20} className="text-red-500" />
              )}
              <span className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
                {Math.abs(data.occupancyTrend)}% from yesterday
              </span>
            </div>
          </div>
          <Progress 
            value={occupancyRate}
            className="h-2"
            style={{ 
              backgroundColor: `${BRAND_COLORS.tertiary}20`,
              '--progress-foreground': getProgressColor(occupancyRate)
            } as React.CSSProperties}
          />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <QuickStat
            icon={<Bed />}
            label="Available Beds"
            value={data.available}
            color={BRAND_COLORS.primary}
          />
          <QuickStat
            icon={<Users />}
            label="Occupied Beds"
            value={data.occupied}
            color={BRAND_COLORS.secondary}
          />
          <QuickStat
            icon={<Clock />}
            label="Waiting List"
            value={data.waitingList}
            color={BRAND_COLORS.tertiary}
            urgent={data.waitingList > 5}
          />
          <QuickStat
            icon={<AlertTriangle />}
            label="In Maintenance"
            value={data.maintenance}
            color={BRAND_COLORS.accent}
          />
        </div>

        {/* Today's Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4 bg-gray-50">
            <h3 className="text-sm font-medium mb-4" style={{ color: BRAND_COLORS.text.primary }}>
              Today's Schedule
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" size={16} />
                  <span className="text-sm">Planned Discharges</span>
                </div>
                <span className="font-medium">{data.dischargeToday}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="text-blue-500" size={16} />
                  <span className="text-sm">New Admissions</span>
                </div>
                <span className="font-medium">{data.admissionToday}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="text-orange-500" size={16} />
                  <span className="text-sm">Emergency Requests</span>
                </div>
                <span className="font-medium">{data.emergency}</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gray-50">
            <h3 className="text-sm font-medium mb-4" style={{ color: BRAND_COLORS.text.primary }}>
              Efficiency Metrics
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Average Length of Stay</span>
                <span className="font-medium">{data.averageStay} days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Bed Turnover Rate</span>
                <span className="font-medium">4.2 patients/bed</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Cleaning Efficiency</span>
                <span className="font-medium">{data.cleaning} pending</span>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}

function QuickStat({ icon, label, value, color, urgent = false }: {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
  urgent?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 rounded-lg"
      style={{ backgroundColor: `${color}10` }}
    >
      <div className="flex items-center justify-between mb-2">
        <span style={{ color }}>{icon}</span>
        {urgent && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />}
      </div>
      <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>{label}</p>
      <p className="text-2xl font-bold mt-1" style={{ color }}>{value}</p>
    </motion.div>
  );
}

function getProgressColor(occupancyRate: number): string {
  if (occupancyRate >= 90) return '#ef4444';  // Red
  if (occupancyRate >= 75) return '#f59e0b';  // Yellow
  return BRAND_COLORS.primary;  // Primary color
} 