import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";

export const sharedStyles = {
  card: {
    base: "bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200",
    header: "border-b border-gray-100/50 p-6",
    content: "p-6",
  },
  text: {
    title: `text-xl font-semibold`,
    subtitle: `text-sm mt-1`,
    label: `text-sm font-medium`,
  },
  colors: {
    primary: BRAND_COLORS.primary,
    secondary: BRAND_COLORS.secondary,
    background: {
      hover: `${BRAND_COLORS.primary}10`,
    }
  },
  transitions: "transition-all duration-200 ease-in-out",
  hover: "hover:scale-[1.02]",
  grid: {
    main: "grid grid-cols-1 xl:grid-cols-3 gap-6",
    stats: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
    charts: "grid grid-cols-1 xl:grid-cols-2 gap-6",
  }
};

export const chartDefaults = {
  font: {
    family: "'Inter', sans-serif",
  },
  colors: {
    background: `${BRAND_COLORS.chart.primary}20`,
    border: BRAND_COLORS.chart.primary,
    text: BRAND_COLORS.text.primary,
  },
  animation: {
    duration: 750,
    easing: 'easeInOutQuart'
  }
}; 