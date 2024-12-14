import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface UtilizationData {
  date: string;
  emergency: number;
  planned: number;
  maintenance: number;
}

interface Props {
  data: UtilizationData[];
}

export default function BedUtilizationTimeline({ data }: Props) {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Emergency",
        data: data.map((item) => item.emergency),
        borderColor: BRAND_COLORS.chart.primary,
        backgroundColor: `${BRAND_COLORS.chart.primary}20`,
        tension: 0.4,
      },
      {
        label: "Planned",
        data: data.map((item) => item.planned),
        borderColor: BRAND_COLORS.chart.secondary,
        backgroundColor: `${BRAND_COLORS.chart.secondary}20`,
        tension: 0.4,
      },
      {
        label: "Maintenance",
        data: data.map((item) => item.maintenance),
        borderColor: BRAND_COLORS.chart.tertiary,
        backgroundColor: `${BRAND_COLORS.chart.tertiary}20`,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: BRAND_COLORS.text.primary,
        },
      },
      title: {
        display: true,
        text: "Bed Utilization Timeline",
        color: BRAND_COLORS.text.primary,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value: number) => `${value}%`,
          color: BRAND_COLORS.text.secondary,
        },
        grid: {
          color: `${BRAND_COLORS.text.light}20`,
        },
      },
      x: {
        ticks: {
          color: BRAND_COLORS.text.secondary,
        },
        grid: {
          color: `${BRAND_COLORS.text.light}20`,
        },
      },
    },
  };

  return (
    <div className="rounded-lg shadow-md p-6" style={{ backgroundColor: BRAND_COLORS.background.card }}>
      <Line data={chartData} options={options} />
    </div>
  );
} 