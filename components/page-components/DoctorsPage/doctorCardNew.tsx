import React from "react";
import Link from 'next/link';

export interface Doctor {
  name: string;
  specialization: string;
  experience: number;
  degrees: string;
  qualifications: string;
  languages: string[];
  clinic: string;
  city: string;
  atClinicFee: number;
  onlineFee: number;
  rating: number;
  totalRatings: number;
  availableTime: string;
  profileImage: string;
  bio: string;
  availableDays: string[];
}

interface DoctorCardProps extends Doctor {}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  experience,
  degrees,
  qualifications,
  languages,
  clinic,
  city,
  atClinicFee,
  onlineFee,
  rating,
  totalRatings,
  availableTime,
  profileImage,
  availableDays,
}) => {
  return (
    <div className="w-full max-w-lg lg:max-w-4xl mx-auto p-8 rounded-lg shadow-xl transition-transform transform  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-gray-100">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">

        <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full border-blue-600 border-2 lg:rounded-md overflow-hidden shadow-md">
          <img
            className="object-cover w-full h-full transition-transform transform hover:scale-110"
            src={profileImage}
            alt={name}
          />
        </div>

        <div className="flex lg:flex-row flex-col items-center w-full ">
        <div className="flex flex-col justify-between w-full">
          {/* Basic Info */}
          <div className="text-center lg:text-start">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{name}</h2>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold my-0.5 text-lg">
              {specialization} - {experience} Years Exp.
            </p>
            <p className="text-gray-600 dark:text-gray-300">{degrees}</p>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-sm space-y-1 text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-semibold">Qualifications:</span> {qualifications}
            </p>
            <p>
              <span className="font-semibold">Languages:</span> {languages.join(", ")}
            </p>
            <p>
              Clinic: <span className="font-semibold">{clinic}, {city}</span>
            </p>
            <p>
              Fees:{" "}
              <span className="text-green-500 dark:text-green-400">₹{atClinicFee}</span> at clinic,{" "}
              <span className="text-green-500 dark:text-green-400">₹{onlineFee}</span> online
            </p>
            <p>
              Available today:{" "}
              <span className="font-semibold">{availableTime}</span>
            </p>
          </div>

          {/* Ratings & Reviews */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-green-500 dark:text-green-400 text-lg">
              {rating}% Rating • <span className="text-orange-700">{totalRatings} reviews</span> 
            </p>
            </div>
            </div>

            <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row sm: justify-between lg:flex-col w-full space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-4">
              <button className="px-2 py-3 w-full mx-auto bg-blue-600 dark:bg-blue-700 text-white rounded-lg transition-colors hover:bg-blue-700 dark:hover:bg-blue-800">
                Call Now
              </button>
              <Link 
                href={{
                  pathname: '/appointment',
                  query: { doctor: JSON.stringify({ name, specialization, experience, degrees, qualifications, languages, clinic, city, atClinicFee, onlineFee, rating, totalRatings, availableTime, profileImage, availableDays }) }
                }} 
                passHref
              >
                <button className="px-2 py-3 mx-auto w-full  bg-green-600 dark:bg-green-700 text-white rounded-lg transition-colors hover:bg-green-700 dark:hover:bg-green-800">
                  Book Appointment 
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Mehta",
    specialization: "Cardiologist",
    experience: 12,
    degrees: "MBBS, MD - Cardiology",
    qualifications: "Specialist in Cardiac Surgery",
    languages: ["English", "Hindi"],
    clinic: "Heart Care Center",
    city: "Mumbai",
    atClinicFee: 1000,
    onlineFee: 700,
    rating: 88,
    totalRatings: 150,
    availableTime: "02:00 PM - 05:00 PM",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Dr. Sarah Mehta is a highly skilled cardiologist with over 12 years of experience in treating various heart conditions.",
    availableDays: ["Monday", "Wednesday", "Friday"],
  },
  {
    name: "Dr. Rajesh Sharma",
    specialization: "Diologist",
    experience: 10,
    degrees: "MBBS, MD - Cardiology",
    qualifications: "Specialist in Cardiac Surgery",
    languages: ["English", "Hindi"],
    clinic: "Heart Care Center",
    city: "Mumbai",
    atClinicFee: 1000,
    onlineFee: 700,
    rating: 88,
    totalRatings: 150,
    availableTime: "02:00 PM - 05:00 PM",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Dr. Rajesh Sharma is a highly skilled cardiologist with over 10 years of experience in treating various heart conditions.",
    availableDays: ["Monday", "Wednesday", "Friday"],
  },
];

const DoctorList = () => {
  return (
    <div className="flex flex-col items-center p-4 space-y-8 dark:bg-gray-900">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} {...doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
