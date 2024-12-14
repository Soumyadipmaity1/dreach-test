'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Bed, Timer } from 'lucide-react';
import { HospitalMetrics } from './types';

interface Props {
  metrics: HospitalMetrics;
}

const HospitalMetricsCard: React.FC<Props> = ({ metrics }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 m-2"
    >
      <h3 className="text-[#125872] text-xl font-bold mb-4">Hospital Overview</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#6abfe4] bg-opacity-10 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <Users className="text-[#458ead]" />
            <p className="text-[#125872] font-semibold">Total Patients</p>
          </div>
          <p className="text-2xl font-bold text-[#3d6b84]">{metrics.totalPatients}</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#6abfe4] bg-opacity-10 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <Bed className="text-[#458ead]" />
            <p className="text-[#125872] font-semibold">Available Beds</p>
          </div>
          <p className="text-2xl font-bold text-[#3d6b84]">{metrics.availableBeds}</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#6abfe4] bg-opacity-10 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <Clock className="text-[#458ead]" />
            <p className="text-[#125872] font-semibold">ER Waiting</p>
          </div>
          <p className="text-2xl font-bold text-[#3d6b84]">{metrics.emergencyWaiting}</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#6abfe4] bg-opacity-10 p-4 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <Timer className="text-[#458ead]" />
            <p className="text-[#125872] font-semibold">Avg. Wait Time</p>
          </div>
          <p className="text-2xl font-bold text-[#3d6b84]">{metrics.averageWaitTime}m</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HospitalMetricsCard; 