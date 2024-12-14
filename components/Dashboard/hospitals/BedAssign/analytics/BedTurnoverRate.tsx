import React from "react";
import { Bar } from "react-chartjs-2";
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Info } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  data: {
    department: string;
    turnoverRate: number;
    avgStayDuration: number;
  }[];
}

export default function BedTurnoverRate({ data }: Props) {
  const chartData: ChartData<"bar"> = {
    labels: data.map(item => item.department),
    datasets: [
      {
        label: 'Turnover Rate',
        data: data.map(item => item.turnoverRate),
        backgroundColor: `${BRAND_COLORS.chart.primary}90`,
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
      {
        label: 'Average Stay (days)',
        data: data.map(item => item.avgStayDuration),
        backgroundColor: `${BRAND_COLORS.chart.secondary}90`,
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: BRAND_COLORS.text.primary,
          font: {
            family: "'Inter', sans-serif",
            weight: 500
          },
          usePointStyle: true,
          pointStyle: 'circle'
        },
      },
      tooltip: {
        backgroundColor: BRAND_COLORS.background.card,
        titleColor: BRAND_COLORS.text.primary,
        bodyColor: BRAND_COLORS.text.secondary,
        borderColor: BRAND_COLORS.primary,
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        usePointStyle: true,
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${value}${label.includes('Rate') ? ' patients/bed' : ' days'}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: `${BRAND_COLORS.text.light}10`,
        },
        ticks: {
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
    animation: {
      duration: 750,
      easing: 'easeInOutQuart'
    }
  };

  const averages = {
    turnoverRate: data.reduce((acc, curr) => acc + curr.turnoverRate, 0) / data.length,
    avgStay: data.reduce((acc, curr) => acc + curr.avgStayDuration, 0) / data.length
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold" style={{ color: BRAND_COLORS.text.primary }}>
            Bed Turnover Analysis
          </h3>
          <p className="text-sm mt-1" style={{ color: BRAND_COLORS.text.secondary }}>
            Department-wise bed utilization efficiency
          </p>
        </div>
        <button 
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          title="View detailed analysis"
        >
          <Info size={20} style={{ color: BRAND_COLORS.text.secondary }} />
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${BRAND_COLORS.primary}10` }}>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
              Avg. Turnover Rate
            </span>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <p className="text-2xl font-bold mt-2" style={{ color: BRAND_COLORS.primary }}>
            {averages.turnoverRate.toFixed(1)}
          </p>
          <p className="text-xs mt-1" style={{ color: BRAND_COLORS.text.secondary }}>
            patients/bed
          </p>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${BRAND_COLORS.secondary}10` }}>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>
              Avg. Length of Stay
            </span>
            <TrendingDown size={16} className="text-red-500" />
          </div>
          <p className="text-2xl font-bold mt-2" style={{ color: BRAND_COLORS.secondary }}>
            {averages.avgStay.toFixed(1)}
          </p>
          <p className="text-xs mt-1" style={{ color: BRAND_COLORS.text.secondary }}>
            days
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[300px] relative">
        <Bar data={chartData} options={options} />
      </div>

      {/* Legend/Info */}
      <div className="mt-4 pt-4 border-t" style={{ borderColor: `${BRAND_COLORS.text.light}20` }}>
        <div className="flex items-center justify-between text-sm">
          <span style={{ color: BRAND_COLORS.text.secondary }}>
            Higher turnover rate indicates better bed utilization
          </span>
          <button 
            className="px-3 py-1.5 rounded-lg text-sm transition-colors"
            style={{ 
              backgroundColor: `${BRAND_COLORS.primary}10`,
              color: BRAND_COLORS.primary
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
} 