export interface DepartmentStats {
  departmentName: string;
  admissions: number;
  discharges: number;
  deaths: number;
  occupancyRate: number;
  waitingList: number;
}

export interface DoctorSpecialty {
  specialty: string;
  count: number;
  availableToday: number;
  onCall: number;
}

export interface NurseStats {
  workload: number;
  staffingLevel: number;
  shiftsToday: number;
  emergencyStaff: number;
}

export interface HospitalMetrics {
  totalPatients: number;
  availableBeds: number;
  emergencyWaiting: number;
  averageWaitTime: number;
} 