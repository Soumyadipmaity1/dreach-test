"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStethoscope,
  FaTimes,
  FaVideo,
  FaUserMd,
  FaUserNurse,
} from "react-icons/fa";
import { debounce } from 'lodash';

// Improved TypeScript interfaces
interface SearchState {
  query: string;
  location: string;
}

interface FilterState {
  availableToday: boolean;
  nextThreeDays: boolean;
  femaleDoctors: boolean;
  maleDoctors: boolean;
  videoConsult: boolean;
}

type TabType = "all" | "online" | "clinic";

// Extracted filter configurations for better maintainability
const FILTER_CONFIG = [
  {
    key: "availableToday",
    label: "Available Today",
    icon: FaStethoscope,
    iconColor: "text-blue-500",
  },
  {
    key: "nextThreeDays",
    label: "Next 3 Days",
    icon: FaCalendarAlt,
    iconColor: "text-green-500",
  },
  {
    key: "femaleDoctors",
    label: "Female Doctors",
    icon: FaUserNurse,
    iconColor: "text-purple-500",
  },
  {
    key: "maleDoctors",
    label: "Male Doctors",
    icon: FaUserMd,
    iconColor: "text-indigo-500",
  },
  {
    key: "videoConsult",
    label: "Video Consult",
    icon: FaVideo,
    iconColor: "text-teal-500",
  },
] as const;

const DoctorSearch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [search, setSearch] = useState<SearchState>({
    query: "",
    location: "",
  });
  const [filters, setFilters] = useState<FilterState>({
    availableToday: false,
    nextThreeDays: false,
    femaleDoctors: false,
    maleDoctors: false,
    videoConsult: false,
  });
  const [isSearching, setIsSearching] = useState(false);

  // Debounced search handler
  const debouncedSearch = useMemo(
    () =>
      debounce(async (searchData: SearchState, filterData: FilterState) => {
        try {
          // Implement actual search logic here
          console.log("Searching with:", { searchData, filterData });
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error("Search failed:", error);
        } finally {
          setIsSearching(false);
        }
      }, 500),
    []
  );

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch(prev => ({ ...prev, [name]: value }));
    setIsSearching(true);
    debouncedSearch({ ...search, [name]: value }, filters);
  }, [search, filters, debouncedSearch]);

  const toggleFilter = useCallback((filterKey: keyof FilterState) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        [filterKey]: !prev[filterKey],
      };
      debouncedSearch(search, newFilters);
      return newFilters;
    });
  }, [search, debouncedSearch]);

  const resetFilters = useCallback(() => {
    const resetState = {
      availableToday: false,
      nextThreeDays: false,
      femaleDoctors: false,
      maleDoctors: false,
      videoConsult: false,
    };
    setFilters(resetState);
    debouncedSearch(search, resetState);
  }, [search, debouncedSearch]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl mt-5 shadow-xl p-4 md:p-6 max-w-7xl mx-auto"
    >
      {/* Search Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "online", "clinic"].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(tab as TabType)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
              activeTab === tab
                ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {tab} Doctors
          </motion.button>
        ))}
      </div>

      {/* Search Form */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Doctor/Specialty Search */}
        <div className="sm:col-span-2 relative">
          <SearchInput
            icon={<FaSearch className="h-5 w-5 text-gray-400" />}
            name="query"
            value={search.query}
            onChange={handleSearchChange}
            placeholder="Search doctors, specialties, symptoms..."
          />
        </div>

        {/* Location */}
        <div className="relative">
          <SearchInput
            icon={<FaMapMarkerAlt className="h-5 w-5 text-gray-400" />}
            name="location"
            value={search.location}
            onChange={handleSearchChange}
            placeholder="Location"
          />
        </div>

        {/* Search Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button" 
          disabled={isSearching}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-md hover:shadow-lg"
        >
          <FaSearch className="h-5 w-5" />
          <span>{isSearching ? "Searching..." : "Search"}</span>
        </motion.button>
      </div>

      {/* Quick Filters */}
      <div className="mt-6">
        <AnimatePresence>
          <motion.div className="flex flex-wrap gap-3 items-center">
            {FILTER_CONFIG.map(({ key, label, icon: Icon, iconColor }) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => toggleFilter(key as keyof FilterState)}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filters[key as keyof FilterState]
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 shadow-sm"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {Icon && <Icon className={`mr-2 h-4 w-4 ${iconColor}`} />}
                {label}
              </motion.button>
            ))}
            
            {Object.values(filters).some(Boolean) && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center px-3 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium hover:bg-red-200 transition-all duration-200"
              >
                <FaTimes className="mr-1 h-4 w-4" />
                Clear Filters
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Extracted reusable SearchInput component
const SearchInput: React.FC<{
  icon: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}> = ({ icon, name, value, onChange, placeholder }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      {icon}
    </div>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
    />
  </div>
);

export default DoctorSearch;
