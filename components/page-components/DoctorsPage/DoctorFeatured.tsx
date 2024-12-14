"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Toaster } from 'sonner';
import {
  FaStar,
  FaVideo,
  FaUserMd,
  FaTimes,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

type ConsultationType = "Online" | "Clinic";

type Doctor = {
  id: number;
  name: string;
  image: string;
  specialty: string;
  experience: string;
  rating: number;
  consultations: ConsultationType[];
  availableSlots: number;
  consultationFee: number;
  nextAvailable: string;
  isOnline: boolean;
};

const featuredDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Emily Rodriguez",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    specialty: "Cardiology",
    experience: "15 years",
    rating: 4.9,
    consultations: ["Online", "Clinic"],
    availableSlots: 12,
    consultationFee: 500,
    nextAvailable: "Today",
    isOnline: true,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    specialty: "Neurology",
    experience: "12 years",
    rating: 4.8,
    consultations: ["Online"],
    availableSlots: 8,
    consultationFee: 600,
    nextAvailable: "Tomorrow",
    isOnline: true,
  },
  {
    id: 3,
    name: "Dr. Sarah Thompson",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    specialty: "Pediatrics",
    experience: "10 years",
    rating: 4.7,
    consultations: ["Clinic"],
    availableSlots: 6,
    consultationFee: 450,
    nextAvailable: "Today",
    isOnline: false,
  },
  {
    id: 4,
    name: "Dr. David Kim",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    specialty: "Orthopedics",
    experience: "18 years",
    rating: 4.9,
    consultations: ["Online", "Clinic"],
    availableSlots: 10,
    consultationFee: 700,
    nextAvailable: "Today",
    isOnline: true,
  },
  {
    id: 1,
    name: "Dr. Emily Rodriguez",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    specialty: "Cardiology",
    experience: "15 years",
    rating: 4.9,
    consultations: ["Online", "Clinic"],
    availableSlots: 12,
    consultationFee: 500,
    nextAvailable: "Today",
    isOnline: true,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    specialty: "Neurology",
    experience: "12 years",
    rating: 4.8,
    consultations: ["Online"],
    availableSlots: 8,
    consultationFee: 600,
    nextAvailable: "Tomorrow",
    isOnline: true,
  },
  {
    id: 3,
    name: "Dr. Sarah Thompson",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    specialty: "Pediatrics",
    experience: "10 years",
    rating: 4.7,
    consultations: ["Clinic"],
    availableSlots: 6,
    consultationFee: 450,
    nextAvailable: "Today",
    isOnline: false,
  },
  {
    id: 4,
    name: "Dr. David Kim",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    specialty: "Orthopedics",
    experience: "18 years",
    rating: 4.9,
    consultations: ["Online", "Clinic"],
    availableSlots: 10,
    consultationFee: 700,
    nextAvailable: "Today",
    isOnline: true,
  },
];

const DoctorFeatured = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedConsultationType, setSelectedConsultationType] =
    useState<ConsultationType | null>(null);
  const [bookingStep, setBookingStep] = useState<"select" | "confirm">(
    "select"
  );

  const handleBookNow = useCallback((doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setBookingStep("select");
  }, []);

  const handleConsultationTypeSelect = (type: ConsultationType) => {
    setSelectedConsultationType(type);
    setBookingStep("confirm");
  };

  const handleConfirmBooking = async () => {
    if (!selectedDoctor || !selectedConsultationType) return;

    try {
      // Show a temporary loading state in the button instead of toast
      const button = document.activeElement as HTMLButtonElement;
      const originalText = button.innerHTML;
      button.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Booking...
      `;
      button.disabled = true;

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Success toast
      toast.success(
        `Appointment Booked Successfully`,
        {
          description: `Your appointment with ${selectedDoctor.name} has been confirmed`,
          duration: 3000,
          position: "bottom-right",
          icon: <FaUserMd className="text-green-500 h-5 w-5" />,
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
          },
        }
      );

      // Reset booking state
      handleCloseBooking();
    } catch (error) {
      toast.error("Unable to book appointment", {
        description: "Please try again later",
        duration: 3000,
        position: "bottom-right",
      });
    }
  };

  const handleCloseBooking = () => {
    setSelectedDoctor(null);
    setSelectedConsultationType(null);
    setBookingStep("select");
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <Toaster richColors closeButton position="bottom-right" />

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
              Featured Specialists
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Book appointments with our top-rated doctors
            </p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-brand-primary rounded-lg text-brand-primary hover:bg-brand-light transition-all duration-200 font-medium">
            View All
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-strong transition-all duration-400 overflow-hidden border border-gray-100/20 dark:border-gray-700/30">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-400"
                />
                {doctor.isOnline && (
                  <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-xs text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center shadow-soft animate-pulse-soft">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                    <FaVideo className="mr-1.5" />
                    Online
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
                    {doctor.name}
                  </h3>
                  <p className="text-brand-primary dark:text-brand-primary font-medium flex items-center">
                    <span className="w-2 h-2 bg-brand-primary dark:bg-brand-primary rounded-full mr-2"></span>
                    {doctor.specialty}
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaUserMd className="mr-2 text-gray-400" />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaClock className="mr-2 text-gray-400" />
                      <span>{doctor.availableSlots} slots</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-green-600 dark:text-green-400 font-medium text-sm">
                      Next: {doctor.nextAvailable}
                    </div>
                    <div className="text-gray-900 dark:text-white font-semibold">
                      ₹{doctor.consultationFee}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleBookNow(doctor)}
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group shadow-sm hover:shadow-md">
                  <span>Book Appointment</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full shadow-2xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Book Appointment
                  </h3>
                  <button
                    onClick={handleCloseBooking}
                    className="text-muted-foreground hover:text-foreground dark:hover:text-white p-2 rounded-full hover:bg-muted dark:hover:bg-muted transition-colors"
                    aria-label="Close booking modal">
                    <FaTimes className="h-5 w-5" />
                  </button>
                </div>

                {bookingStep === "select" && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                      Select Consultation Type
                    </h4>
                    <div className="space-y-4">
                      {selectedDoctor.consultations.map((type) => (
                        <button
                          key={type}
                          onClick={() => handleConsultationTypeSelect(type)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-brand-light dark:bg-gray-800 dark:hover:bg-brand-dark/20 rounded-lg transition-colors">
                          <div className="flex items-center">
                            {type === "Online" ? (
                              <FaVideo className="mr-3 text-emerald-500" />
                            ) : (
                              <FaCalendarAlt className="mr-3 text-blue-500" />
                            )}
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {type} Consultation
                            </span>
                          </div>
                          <span className="text-gray-500 dark:text-gray-400">
                            ₹{selectedDoctor.consultationFee}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {bookingStep === "confirm" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                      Confirm Booking
                    </h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <FaUserMd className="mr-3 text-blue-500" />
                        <span className="font-medium">
                          {selectedDoctor.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {selectedConsultationType === "Online" ? (
                          <FaVideo className="mr-3 text-emerald-500" />
                        ) : (
                          <FaCalendarAlt className="mr-3 text-blue-500" />
                        )}
                        <span>{selectedConsultationType} Consultation</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-3 text-purple-500" />
                        <span>
                          Next Available: {selectedDoctor.nextAvailable}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={handleConfirmBooking}
                      className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md">
                      <span>Confirm Booking</span>
                      <span className="font-semibold">
                        (₹{selectedDoctor.consultationFee})
                      </span>
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DoctorFeatured;
