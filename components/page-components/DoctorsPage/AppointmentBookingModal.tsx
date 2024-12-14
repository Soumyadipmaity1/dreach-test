import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useDoctorStore, Appointment, Doctor } from "@/lib/stores/doctorStore";

// Zod schema for form validation
const BookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Invalid 10-digit phone number" }),
  date: z.string().refine(
    (val) => {
      const selectedDate = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    },
    { message: "Date must be today or in the future" }
  ),
  time: z.string().refine(
    (val) => {
      const [hours, minutes] = val.split(":").map(Number);
      const selectedTime = new Date();
      selectedTime.setHours(hours, minutes, 0, 0);
      const now = new Date();
      return selectedTime > now;
    },
    { message: "Invalid time selected" }
  ),
});

type BookingFormData = z.infer<typeof BookingSchema>;

interface AppointmentBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor?: Doctor;
}

// Add this dummy data for frontend display
const DUMMY_DOCTORS = [
  {
    id: 1,
    name: "Sarah Wilson",
    specialty: "Cardiologist",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "James Mitchell",
    specialty: "Neurologist",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emily Parker",
    specialty: "Dermatologist",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    id: 4,
    name: "Michael Chen",
    specialty: "Pediatrician",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/79.jpg"
  },
];

export const AppointmentBookingModal: React.FC<
  AppointmentBookingModalProps
> = ({ isOpen, onClose, doctor }) => {
  const { bookAppointment, doctors, fetchDoctors } = useDoctorStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(
    doctor || null
  );

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.15 },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: new Date().toISOString().split("T")[0],
      time: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      reset();
      setSelectedDoctor(doctor || null);
      // Fetch doctors if not already loaded
      if (doctors.length === 0) {
        fetchDoctors();
      }
    }
  }, [isOpen, doctor, reset, doctors, fetchDoctors]);

  const onSubmit = async (data: BookingFormData) => {
    if (!selectedDoctor) {
      toast.error("Please select a doctor before booking.");
      return;
    }

    setIsSubmitting(true);
    try {
      const appointmentData: Appointment = {
        doctorId: selectedDoctor.id,
        patientName: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        time: data.time,
        specialty: selectedDoctor.specialty,
        status: "pending",
      };

      const result = await bookAppointment(appointmentData);

      if (result) {
        toast.success("Appointment booked successfully!", {
          description: `Booked with Dr. ${selectedDoctor.name} on ${data.date} at ${data.time}`,
        });
        reset();
        onClose();
      } else {
        throw new Error("Booking failed");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to book appointment", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {!selectedDoctor ? (
            <motion.div
              key="doctor-selection"
              variants={contentVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2e5566] to-[#30acda] bg-clip-text text-transparent">
                  Choose Your Specialist
                </h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 hover:bg-[#30acda]/10 dark:hover:bg-[#30acda]/20 transition-colors">
                  <span className="sr-only">Close</span>
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {DUMMY_DOCTORS.map((doc) => (
                  <motion.button
                    key={doc.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedDoctor(doc)}
                    className="group relative overflow-hidden bg-gradient-to-br from-[#30acda]/10 to-[#2e5566]/10 dark:from-[#30acda]/20 dark:to-[#2e5566]/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-lg text-gray-900 dark:text-white">
                          Dr. {doc.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {doc.specialty}
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="flex text-[#30acda]">
                            {Array(5).fill('★').map((star, i) => (
                              <span key={i} className={i < Math.floor(doc.rating) ? 'opacity-100' : 'opacity-30'}>
                                {star}
                              </span>
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            {doc.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#30acda]/10 to-[#2e5566]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="booking-form"
              variants={contentVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md mx-auto p-8 border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#2e5566] to-[#30acda] bg-clip-text text-transparent">
                  Book Appointment
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedDoctor(null)}
                    className="rounded-full p-2 hover:bg-[#30acda]/10 dark:hover:bg-[#30acda]/20 transition-colors">
                    ←
                  </button>
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 hover:bg-[#30acda]/10 dark:hover:bg-[#30acda]/20 transition-colors">
                    ✕
                  </button>
                </div>
              </div>

              <div className="mb-8 p-6 bg-gradient-to-br from-[#30acda]/10 to-[#2e5566]/10 dark:from-[#30acda]/20 dark:to-[#2e5566]/20 rounded-xl border border-[#30acda]/20 dark:border-[#30acda]/30">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Dr. {selectedDoctor.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {selectedDoctor.specialty}
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  {[
                    { icon: FaUser, placeholder: "Full Name", field: "name" },
                    { icon: FaEnvelope, placeholder: "Email", field: "email" },
                    { icon: FaPhone, placeholder: "Phone", field: "phone" },
                    { icon: FaCalendar, placeholder: "Date", field: "date", type: "date" },
                    { icon: FaClock, placeholder: "Time", field: "time", type: "time" },
                  ].map(({ icon: Icon, placeholder, field, type }) => (
                    <div key={field}>
                      <div className="relative group">
                        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#30acda] transition-colors" />
                        <input
                          type={type || "text"}
                          placeholder={placeholder}
                          {...register(field as keyof BookingFormData)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                                   focus:ring-2 focus:ring-[#30acda] focus:border-transparent
                                   bg-white dark:bg-gray-800 transition-all duration-200
                                   placeholder-gray-400 text-gray-900 dark:text-white"
                        />
                      </div>
                      {errors[field as keyof BookingFormData] && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors[field as keyof BookingFormData]?.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#2e5566] to-[#30acda] hover:from-[#2e5566]/90 hover:to-[#30acda]/90
                           text-white py-3 rounded-xl transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transform hover:scale-[1.02] active:scale-[0.98]">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Booking...
                    </span>
                  ) : (
                    "Book Appointment"
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentBookingModal;
