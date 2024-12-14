'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BRAND_COLORS, CHART_COLORS } from './constants';
import { DoctorSpecialty } from './types';

interface Props {
  data: DoctorSpecialty[];
}

const DoctorSpecialtyDistributionChart: React.FC<Props> = ({ data }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-xl shadow-lg p-6 h-[400px]"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-[${BRAND_COLORS.primary}] text-xl font-bold`}>
          Doctor Specialty Distribution
        </h3>
        <span className={`bg-[${BRAND_COLORS.tertiary}] bg-opacity-10 text-[${BRAND_COLORS.primary}] px-3 py-1 rounded-full text-sm`}>
          Total: {data.reduce((acc, curr) => acc + curr.count, 0)}
        </span>
      </div>
      
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={BRAND_COLORS.tertiary} />
          <XAxis dataKey="specialty" tick={{ fill: BRAND_COLORS.primary }} />
          <YAxis tick={{ fill: BRAND_COLORS.primary }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          />
          <Bar 
            dataKey="count" 
            fill={BRAND_COLORS.secondary}
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
          />
          <Bar 
            dataKey="availableToday" 
            fill={BRAND_COLORS.tertiary}
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default DoctorSpecialtyDistributionChart; 