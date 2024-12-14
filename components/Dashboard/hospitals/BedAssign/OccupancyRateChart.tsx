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
  ChartOptions,
} from "chart.js";
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";
import { sharedStyles, chartDefaults } from './styles/shared';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface OccupancyData {
  department: string;
  occupancyRate: number;
}

interface Props {
  data: OccupancyData[];
}

export default function OccupancyRateChart({ data }: Props) {
  const chartData = {
    labels: data.map((item) => item.department),
    datasets: [
      {
        label: "Occupancy Rate (%)",
        data: data.map((item) => item.occupancyRate),
        borderColor: BRAND_COLORS.chart.primary,
        backgroundColor: `${BRAND_COLORS.chart.primary}20`,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: chartDefaults.colors.text,
          font: {
            ...chartDefaults.font,
            weight: 500
          },
          usePointStyle: true,
          pointStyle: 'circle'
        },
      },
      title: {
        display: true,
        text: "Department Occupancy Rates",
        color: BRAND_COLORS.text.primary,
        font: {
          family: "'Inter', sans-serif",
          size: 16,
          weight: '600'
        }
      },
      tooltip: {
        backgroundColor: BRAND_COLORS.background.card,
        titleColor: BRAND_COLORS.text.primary,
        bodyColor: BRAND_COLORS.text.secondary,
        borderColor: BRAND_COLORS.primary,
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y}% Occupied`
        }
      }
    },
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        max: 100,
        grid: {
          color: `${BRAND_COLORS.text.light}10`,
          drawBorder: false
        },
        ticks: {
          callback: (value) => `${value}%`,
          color: BRAND_COLORS.text.secondary,
          font: {
            family: "'Inter', sans-serif"
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: BRAND_COLORS.text.secondary,
          font: {
            family: "'Inter', sans-serif"
          }
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 4,
        hoverRadius: 6,
        borderWidth: 2,
        backgroundColor: BRAND_COLORS.background.card
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear'
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={options} />
    </div>
  );
} 