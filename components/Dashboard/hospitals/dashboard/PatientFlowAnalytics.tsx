'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BRAND_COLORS } from './constants';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface FlowDataPoint {
  time: string;
  admissions: number;
  discharges: number;
  inPatients: number;
}

interface Stats {
  totalAdmissions: number;
  totalDischarges: number;
  currentInPatients: number;
  trend: number;
}

interface Props {
  flowData: FlowDataPoint[];
  todayStats: Stats;
}

export function PatientFlowAnalytics({ flowData, todayStats }: Props) {
  const chartData = {
    labels: flowData.map(data => data.time),
    datasets: [
      {
        label: 'Admissions',
        data: flowData.map(data => data.admissions),
        borderColor: BRAND_COLORS.chart.primary,
        tension: 0.4,
        fill: false
      },
      {
        label: 'Discharges',
        data: flowData.map(data => data.discharges),
        borderColor: BRAND_COLORS.chart.secondary,
        tension: 0.4,
        fill: false
      }
    ]
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: `${BRAND_COLORS.chart.grid}20`,
        },
        ticks: {
          callback: function(value) {
            if (typeof value === 'number') {
              return value.toString();
            }
            return value;
          },
          color: BRAND_COLORS.text.secondary,
        }
      },
      x: {
        grid: {
          color: `${BRAND_COLORS.chart.grid}20`,
        },
        ticks: {
          color: BRAND_COLORS.text.secondary,
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: BRAND_COLORS.text.secondary,
        }
      },
      tooltip: {
        backgroundColor: BRAND_COLORS.chart.tooltip,
        titleColor: BRAND_COLORS.text.primary,
        bodyColor: BRAND_COLORS.text.primary,
        padding: 12,
        cornerRadius: 8
      }
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold" style={{ color: BRAND_COLORS.text.primary }}>
          Patient Flow Analytics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] mb-4">
          <Line data={chartData} options={options} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>Today's Admissions</p>
            <p className="text-2xl font-bold" style={{ color: BRAND_COLORS.text.primary }}>
              {todayStats.totalAdmissions}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>Today's Discharges</p>
            <p className="text-2xl font-bold" style={{ color: BRAND_COLORS.text.primary }}>
              {todayStats.totalDischarges}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}