'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Users, Clock, AlertCircle } from 'lucide-react';
import { BRAND_COLORS } from './constants';

interface Props {
  workload: number;
  staffingLevel: number;
  shiftsToday: number;
  emergencyStaff: number;
}

const NurseWorkloadTracker: React.FC<Props> = ({ 
  workload, 
  staffingLevel,
  shiftsToday,
  emergencyStaff 
}) => {
  const data = [
    { name: 'Current Workload', value: workload },
    { name: 'Available Capacity', value: 100 - workload }
  ];

  const COLORS = ['#125872', '#6abfe4']; // Primary and Tertiary colors

  const getWorkloadStatus = (load: number) => {
    if (load < 50) return { text: 'Normal', color: 'text-[#125872]', bg: 'bg-[#6abfe4]' };
    if (load < 75) return { text: 'Moderate', color: 'text-[#458ead]', bg: 'bg-[#6abfe4]' };
    return { text: 'High', color: 'text-[#3d6b84]', bg: 'bg-[#6abfe4]' };
  };

  const status = getWorkloadStatus(workload);

  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-xl shadow-lg p-6 h-[400px]"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#125872] text-xl font-bold flex items-center gap-2">
          <Users className="text-[#458ead]" />
          Nurse Workload Tracker
        </h3>
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className={`${status.bg} bg-opacity-10 ${status.color} px-3 py-1 rounded-full text-sm font-medium`}
        >
          {status.text}
        </motion.span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-[#6abfe4] bg-opacity-10 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <Clock className="text-[#458ead]" />
            <div>
              <p className="text-[#125872] font-semibold">Current Workload</p>
              <p className="text-3xl font-bold text-[#3d6b84]">{workload}%</p>
              <p className="text-sm text-[#458ead]">Shifts Today: {shiftsToday}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-[#6abfe4] bg-opacity-10 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="text-[#458ead]" />
            <div>
              <p className="text-[#125872] font-semibold">Staffing Level</p>
              <p className="text-3xl font-bold text-[#3d6b84]">{staffingLevel}%</p>
              <p className="text-sm text-[#458ead]">Emergency Staff: {emergencyStaff}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index]} 
                  strokeWidth={0}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                color: '#125872'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Stats */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[#125872] font-semibold">Total Staff</p>
          <p className="text-2xl font-bold text-[#3d6b84]">{shiftsToday + emergencyStaff}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#125872]"></div>
          <span className="text-sm text-[#125872]">Current Workload</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#6abfe4]"></div>
          <span className="text-sm text-[#125872]">Available Capacity</span>
        </div>
      </div>
    </motion.div>
  );
};

export default NurseWorkloadTracker;