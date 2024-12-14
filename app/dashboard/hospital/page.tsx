'use client';

import React from "react";
import { motion } from 'framer-motion';
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";
import DepartmentDashboardCard from "@/components/Dashboard/hospitals/dashboard/DepartmentDashboardCard";
import DoctorSpecialtyDistributionChart from "@/components/Dashboard/hospitals/dashboard/DoctorSpecialtyDistributionChart";
import NurseWorkloadTracker from "@/components/Dashboard/hospitals/dashboard/NurseWorkloadTracker";
import HospitalMetricsCard from "@/components/Dashboard/hospitals/dashboard/HospitalMetricsCard";
import { EmergencyRoomStatus } from '@/components/Dashboard/hospitals/dashboard/EmergencyRoomStatus';
import { PatientFlowAnalytics } from '@/components/Dashboard/hospitals/dashboard/PatientFlowAnalytics';
import type { EmergencyRoomProps, EmergencySeverity } from '@/app/types/emergency';

const emergencyRoomData: EmergencyRoomProps = {
  activeCases: [
    { severity: "Critical", count: 5, avgWaitTime: 0 },
    { severity: "Moderate", count: 12, avgWaitTime: 15 },
    { severity: "Stable", count: 8, avgWaitTime: 30 }
  ],
  availableDoctors: 8,
  occupiedBeds: 25,
  totalBeds: 50
};

const sampleData = {
  departments: [
    { departmentName: "Cardiology", admissions: 20, discharges: 15, deaths: 5, occupancyRate: 75, waitingList: 8 },
    { departmentName: "Neurology", admissions: 15, discharges: 12, deaths: 3, occupancyRate: 65, waitingList: 5 },
    { departmentName: "Pediatrics", admissions: 25, discharges: 20, deaths: 1, occupancyRate: 80, waitingList: 10 }
  ],
  doctorSpecialties: [
    { specialty: "Cardiology", count: 10, availableToday: 8, onCall: 2 },
    { specialty: "Neurology", count: 8, availableToday: 6, onCall: 2 },
    { specialty: "Pediatrics", count: 12, availableToday: 9, onCall: 3 },
    { specialty: "Oncology", count: 6, availableToday: 5, onCall: 1 }
  ],
  nurseStats: {
    workload: 75,
    staffingLevel: 90,
    shiftsToday: 45,
    emergencyStaff: 10
  },
  hospitalMetrics: {
    totalPatients: 245,
    availableBeds: 52,
    emergencyWaiting: 12,
    averageWaitTime: 45
  },
  emergencyRoom: emergencyRoomData,
  patientFlow: {
    flowData: [
      { time: '08:00', admissions: 5, discharges: 2, inPatients: 120 },
      { time: '10:00', admissions: 8, discharges: 4, inPatients: 124 },
      { time: '12:00', admissions: 12, discharges: 6, inPatients: 130 },
      { time: '14:00', admissions: 7, discharges: 8, inPatients: 129 },
      { time: '16:00', admissions: 10, discharges: 5, inPatients: 134 }
    ],
    todayStats: {
      totalAdmissions: 42,
      totalDischarges: 25,
      currentInPatients: 134,
      trend: 5.2
    }
  }
};

const Hospitals: React.FC = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-[#f8fafc] min-h-screen"
    >
      <div className="max-w-7xl mx-auto pb-5">
        {/* <div className="mb-8">
          <motion.h1 
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="text-3xl font-bold text-[#125872] mb-2"
          >
            Hospital Dashboard
          </motion.h1>
          <p className="text-[#458ead]">Real-time hospital management system</p>
        </div> */}

        <div className="space-y-8">
          <HospitalMetricsCard metrics={sampleData.hospitalMetrics} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <EmergencyRoomStatus {...sampleData.emergencyRoom} />
            <PatientFlowAnalytics {...sampleData.patientFlow} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleData.departments.map((dept, index) => (
              <motion.div
                key={dept.departmentName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <DepartmentDashboardCard {...dept} />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DoctorSpecialtyDistributionChart data={sampleData.doctorSpecialties} />
            <NurseWorkloadTracker {...sampleData.nurseStats} />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Hospitals;
