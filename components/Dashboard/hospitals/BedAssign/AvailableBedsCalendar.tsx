import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";
import { sharedStyles } from './styles/shared';
import { motion } from 'framer-motion';

interface AvailableBed {
  date: string;
  availableBeds: number;
}

interface Props {
  availableBeds: AvailableBed[];
}

interface CalendarModifierStyles {
  [key: string]: {
    className: string;
  };
}

export default function AvailableBedsCalendar({ availableBeds }: Props) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const bedsMap = new Map(
    availableBeds.map((item) => [item.date, item.availableBeds])
  );

  const modifierStyles: CalendarModifierStyles = {
    high: { className: "bg-green-100 dark:bg-green-900/20" },
    medium: { className: "bg-yellow-100 dark:bg-yellow-900/20" },
    low: { className: "bg-red-100 dark:bg-red-900/20" }
  };

  const getDayModifier = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    const beds = bedsMap.get(dateStr);
    
    if (beds === undefined) return "";
    if (beds === 0) return "low";
    if (beds < 3) return "medium";
    return "high";
  };

  return (
    <motion.div 
      className={`${sharedStyles.card.base}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className={sharedStyles.card.header}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className={sharedStyles.text.title} style={{ color: BRAND_COLORS.text.primary }}>
              Available Beds Calendar
            </h3>
            <p className={sharedStyles.text.subtitle} style={{ color: BRAND_COLORS.text.secondary }}>
              View bed availability by date
            </p>
          </div>
          <div className="flex items-center gap-4">
            <LegendItem color="green" label="Many beds" />
            <LegendItem color="yellow" label="Few beds" />
            <LegendItem color="red" label="No beds" />
          </div>
        </div>
      </div>

      <div className={sharedStyles.card.content}>
        <div className="flex items-center justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiers={{
              high: (date) => getDayModifier(date) === "high",
              medium: (date) => getDayModifier(date) === "medium",
              low: (date) => getDayModifier(date) === "low"
            }}
            modifiersStyles={modifierStyles}
            className="rounded-md border shadow-sm"
          />
        </div>

        {date && (
          <div className="mt-4 p-4 rounded-lg bg-gray-50">
            <h4 className="text-sm font-medium mb-2" style={{ color: BRAND_COLORS.text.primary }}>
              Selected Date Details
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <DetailItem 
                label="Available Beds"
                value={bedsMap.get(date.toISOString().split("T")[0]) || 0}
              />
              <DetailItem 
                label="Expected Discharges"
                value={3}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full bg-${color}-100 dark:bg-${color}-900/20`} />
      <span className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>{label}</span>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="text-sm" style={{ color: BRAND_COLORS.text.secondary }}>{label}</p>
      <p className="text-lg font-semibold" style={{ color: BRAND_COLORS.text.primary }}>{value}</p>
    </div>
  );
} 