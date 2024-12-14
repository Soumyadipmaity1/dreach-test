'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertCircle, Users } from 'lucide-react';

interface DepartmentDashboardCardProps {
  departmentName: string;
  admissions: number;
  discharges: number;
  deaths: number;
}

const DepartmentDashboardCard: React.FC<DepartmentDashboardCardProps> = ({ 
  departmentName, 
  admissions, 
  discharges, 
  deaths 
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#125872] bg-opacity-10 p-2 rounded-lg">
            <Users className="text-[#125872] h-5 w-5" />
          </div>
          <div>
            <h3 className="text-[#125872] text-lg font-bold">{departmentName}</h3>
            <p className="text-[#458ead] text-sm">Department Overview</p>
          </div>
        </div>
        <span className="bg-[#6abfe4] bg-opacity-10 px-3 py-1 rounded-full text-sm text-[#125872]">
          Active
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#6abfe4] bg-opacity-10 p-4 rounded-xl border border-[#6abfe4]/20"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#125872] text-sm font-medium">Admissions</p>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-[#125872]">{admissions}</p>
          <p className="text-xs text-[#458ead] mt-1">Today's total</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#6abfe4] bg-opacity-10 p-4 rounded-xl border border-[#6abfe4]/20"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#125872] text-sm font-medium">Discharges</p>
            <TrendingDown className="h-4 w-4 text-[#458ead]" />
          </div>
          <p className="text-2xl font-bold text-[#125872]">{discharges}</p>
          <p className="text-xs text-[#458ead] mt-1">Successfully treated</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#6abfe4] bg-opacity-10 p-4 rounded-xl border border-[#6abfe4]/20"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#125872] text-sm font-medium">Critical</p>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </div>
          <p className="text-2xl font-bold text-[#125872]">{deaths}</p>
          <p className="text-xs text-[#458ead] mt-1">Needs attention</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DepartmentDashboardCard; 