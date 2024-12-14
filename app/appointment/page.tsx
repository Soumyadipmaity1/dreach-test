'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Doctor } from '@/components/page-components/DoctorsPage/doctorCardNew';

const AppointmentContent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const doctorParam = searchParams.get('doctor');
    if (doctorParam) {
      const parsedDoctor: Doctor = JSON.parse(doctorParam);
      setDoctor(parsedDoctor);
    }
  }, [searchParams]);

  const availableSlots: string[] = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "02:00 PM", "03:00 PM", "04:00 PM",
  ];

  const aboutDoctor = [
    { icon: "🎓", label: "Education", value: doctor?.degrees },
    { icon: "🌐", label: "Languages", value: doctor?.languages.join(' • ') },
    { icon: "🏥", label: "Clinic", value: `${doctor?.clinic}, ${doctor?.city}` },
    { icon: "💰", label: "Fees", value: `₹${doctor?.atClinicFee} in-clinic • ₹${doctor?.onlineFee} online` },
  ];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });

    if (doctor && doctor.availableDays.includes(dayOfWeek)) {
      setSelectedDate(e.target.value);
      setSelectedSlot(null);
    } else {
      toast.error(`Dr. ${doctor?.name} is not available on ${dayOfWeek}s. Please choose another day.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleConfirmAppointment = () => {
    toast.success('Appointment confirmed! We look forward to seeing you.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  if (!doctor) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen text-black dark:text-white transition-colors duration-300">

        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-400  dark:from-blue-600 dark:to-sky-300">Book Your Appointment</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-2xl transition-colors duration-300">
          <div className="space-y-6">
            <div className="flex items-center bg-gray-200 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
              <Image src={doctor.profileImage} alt={doctor.name} width={100} height={100} className="rounded-full mr-4 border-4 border-blue-500" />
              <div>
                <h2 className="text-2xl font-bold">{doctor.name}</h2>
                <p className="text-blue-400 font-semibold">{doctor.specialization}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span>{doctor.rating}% • {doctor.totalRatings} reviews</span>
                </div>
                <p className="text-green-600 dark:text-green-400 mt-1">{doctor.experience} years of experience</p>
              </div>
            </div>

            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2">About Dr. {doctor.name.split(' ')[1]}</h3>
              <p className="text-gray-700 dark:text-gray-300"> {doctor.name} is a distinguished {doctor.specialization.toLowerCase()} known for their expertise in advanced cardiac care.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {aboutDoctor.map((item, index) => (
                <div key={index} className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                  <p className="font-semibold flex items-center">
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2">Available Days</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.availableDays.map((day, index) => (
                  <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{day}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4">Select a Date</h3>
              <input
                type="date"
                className="w-full p-2 bg-gray-300 dark:bg-gray-600 rounded-md text-black dark:text-white"
                value={selectedDate}
                onChange={handleDateChange}
                aria-label="Select appointment date"
              />
            </div>

            {selectedDate && (
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4">Available Time Slots</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {availableSlots.map((slot, index) => (
                    <button
                      key={index}
                      className={`p-2 rounded-md transition-colors duration-200 ${selectedSlot === slot ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-600'}`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedDate && selectedSlot && (
              <div className="mt-6 p-4 bg-[#15c32777] rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Appointment Summary</h3>
                <p>Date: {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p>Time: {selectedSlot}</p>
                <button
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  onClick={handleConfirmAppointment}
                >
                  Confirm Appointment
                </button>
              </div>
            )}
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

const AppointmentPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppointmentContent />
    </Suspense>
  );
};

export default AppointmentPage;
