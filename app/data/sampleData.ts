import { EmergencyRoomProps } from '../types/emergency';

// ... other imports and code

export const sampleData = {
  emergencyRoom: {
    activeCases: [
      { severity: "Critical" as const, count: 5, avgWaitTime: 0 },
      { severity: "Moderate" as const, count: 12, avgWaitTime: 15 },
      { severity: "Stable" as const, count: 8, avgWaitTime: 30 }
    ],
    availableDoctors: 8,
    occupiedBeds: 25,
    totalBeds: 50
  } satisfies EmergencyRoomProps,
  // ... rest of your sample data
}; 