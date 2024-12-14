import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import { BRAND_COLORS } from '../constants';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
  }[];
}

export function DepartmentChart({ data }: { data: ChartData }) {
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
        display: false
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
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <Line data={data} options={options} />
    </div>
  );
} 