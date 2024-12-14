"use client";
import { useState, useEffect } from "react";

const LoginFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Booking with:", date, email, number);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal} className="px-6 py-2">
        Book Now
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 bg-gray-900 bg-opacity-70 overflow-y-auto h-full w-full flex justify-center items-start md:items-center pt-10 md:pt-0">
          <div className="relative bg-white rounded-lg shadow-lg p-6 mx-4 my-10 md:max-w-lg md:mx-auto">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Confirm Your Booking
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-800 rounded-full focus:outline-none"
                title="Close Modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 transition duration-200"
                required
              />
              <input
                type="date"
                name="date"
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-gray-400 px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring focus:text-black focus:ring-teal-500 focus:ring-opacity-50 transition duration-200"
                required
                placeholder="Select your Date"
              />
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
                className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 transition duration-200"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginFormModal;
