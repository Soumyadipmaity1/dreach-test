export type EmergencySeverity = "Critical" | "Moderate" | "Stable";

export interface EmergencyCase {
  severity: EmergencySeverity;
  count: number;
  avgWaitTime: number;
}

export interface EmergencyRoomProps {
  activeCases: EmergencyCase[];
  availableDoctors: number;
  occupiedBeds: number;
  totalBeds: number;
} 