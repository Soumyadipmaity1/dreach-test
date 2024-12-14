"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneIcon from "@mui/icons-material/Phone";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { isPast } from "date-fns";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BookAppointment: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [selectedDate, setSelectedDate] = useState<string>("");
	const [open, setOpen] = useState(false);
	const [openError, setOpenError] = useState(false);

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(event.target.value);
	};

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedDate(event.target.value);
	};

	const handleSubmit = () => {
		let isValid = true;

		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			isValid = false;
		}

		if (!phone || !/^[0-9]{10}$/.test(phone)) {
			isValid = false;
		}

		if (!selectedDate || isPast(new Date(selectedDate))) {
			isValid = false;
		}

		if (!isValid) {
			setOpen(false);
			setOpenError(true);
			return;
		}

		console.log("Email:", email);
		console.log("Phone:", phone);
		console.log("Appointment Date:", selectedDate);

		setEmail("");
		setPhone("");
		setSelectedDate("");

		setOpen(true);
		setOpenError(false);
	};

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
		setOpenError(false);
	};

	return (
		<div className="flex flex-col items-center justify-center border-gray-200 border-4 text-[#125872] rounded-xl bg-gray-100 p-5 pt-8 m-6 mt-8 sm:m-12 sm:mx-20 xl:mx-56 lg:-mt-28 sm:py-8 sm:pt-12 2xlg:mx-48">
			<h1 className="text-3xl sm:text-4xl font-bold text-center text-[#125872] mb-8">
				Book an Appointment
			</h1>
			<div className="flex flex-col lg:flex-row justify-center items-center">
				<div className="m-3 lg:mx-1 xl:m-2">
					<TextField
						label="Email Address"
						value={email}
						placeholder="Enter your Email"
						onChange={handleEmailChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<EmailIcon />
								</InputAdornment>
							),
						}}
						variant="outlined"
						className="bg-transparent w-64 lg:w-48 xl:w-64 2xlg:w-16rem 2xl:w-72"
					/>
				</div>
				<div className="m-3 lg:mx-1 xl:m-2">
					<TextField
						label="Appointment Date"
						type="date"
						value={selectedDate}
						onChange={handleDateChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<CalendarTodayIcon />
								</InputAdornment>
							),
						}}
						variant="outlined"
						className="bg-transparent w-64 lg:w-48 xl:w-64 2xlg:w-16rem 2xl:w-72"
					/>
				</div>
				<div className="m-3 lg:mx-1 xl:m-2">
					<TextField
						label="Phone no"
						value={phone}
						placeholder="Enter your Phone number"
						onChange={handlePhoneChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PhoneIcon />
								</InputAdornment>
							),
						}}
						variant="outlined"
						className="bg-transparent w-64 lg:w-48 xl:w-64 2xlg:w-16rem 2xl:w-72"
					/>
				</div>
				<div className="m-6 lg:mx-1 xl:m-2">
					<button
						className="bg-orange-600 text-white font-semibold sm:font-bold rounded-lg px-6 py-3 sm:px-10 shadow hover:bg-red-600"
						onClick={handleSubmit}>
						Book Now
					</button>
				</div>
			</div>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					Appointment booked successfully!
				</Alert>
			</Snackbar>
			<Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="error">
					Invalid date or email or phone number. Please try again.
				</Alert>
			</Snackbar>
		</div>
	);
};

export default BookAppointment;
