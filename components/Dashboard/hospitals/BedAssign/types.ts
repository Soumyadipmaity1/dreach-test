export interface DepartmentStat {
  department: string;
  totalBeds: number;
  occupied: number;
  available: number;
  reserved: number;
  cleaning: number;
  maintenance: number;
  waitingList: number;
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
  efficiency?: number;
  nextAvailable?: string;
  historicalData?: {
    occupancy: number[];
    turnover: number[];
    dates: string[];
  };
  upcomingSchedule?: {
    time: string;
    patient: string;
    type: string;
    bedNumber: string;
  }[];
} 