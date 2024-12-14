'use client';

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
import { BRAND_COLORS } from '../../dashboard/constants';

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

interface PredictiveData {
  labels: string[];
  predicted: number[];
  actual: number[];
}

interface Props {
  data: PredictiveData;
}

export default function PredictiveOccupancy({ data }: Props) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Predicted Occupancy',
        data: data.predicted,
        borderColor: BRAND_COLORS.chart.primary,
        tension: 0.4,
        fill: false
      },
      {
        label: 'Actual Occupancy',
        data: data.actual,
        borderColor: BRAND_COLORS.chart.secondary,
        tension: 0.4,
        fill: false
      }
    ]
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: BRAND_COLORS.text.secondary,
        }
      },
      title: {
        display: true,
        text: 'Bed Occupancy Prediction',
        color: BRAND_COLORS.text.primary
      }
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        beginAtZero: true,
        max: 100,
        grid: {
          color: `${BRAND_COLORS.chart.grid}20`,
        },
        ticks: {
          callback: function(value: number | string) {
            if (typeof value === 'number') {
              return `${value}%`;
            }
            return value;
          },
          color: BRAND_COLORS.text.secondary,
        }
      },
      x: {
        type: 'category' as const,
        grid: {
          color: `${BRAND_COLORS.chart.grid}20`,
        },
        ticks: {
          color: BRAND_COLORS.text.secondary,
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <Line data={chartData} options={options} />
    </div>
  );
} 