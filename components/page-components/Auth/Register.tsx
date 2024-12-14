"use client";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Header from "@/components/page-components/login/header";
import Img from "@/public/websiteImages/registerpageImage.webp";
import Link from "next/link";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "@/ServerActions/user";
import { SignUpSchema, SignUpSchemaType } from "@/Zod/zod";

import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const mapRes = {
  201: "User Registered Successfully",
  400: "Invalid Data",
  500: "Internal Server Error",
  409: "User Already Exists",
};

const Register = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    setLoading(true);

    const res = await registerUser(data);
    console.log(res);

    if (res.status !== 201) {
      alert("Error: " + mapRes[res.status as keyof typeof mapRes]);
      return setLoading(false);
    }

    return router.push("/auth/verify?phone=" + data.phone);
  };

  return (
    <section className="h-screen flex flex-col bg-[#d8eaee] dark:bg-[#1F2C3B]">
      <Header />
      <div className="flex justify-center xl:space-x-20 lg:space-x-6 space-x-0 bg-[#d8eaee] dark:bg-[#1F2C3B]">
        <div className="hidden lg:block">
          <Image
            src={Img}
            alt="Register Page Image"
            className="w-96 mt-24"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <div className="md:w-[450px] w-[345px] px-6 md:px-8 py-6 space-y-6 bg-offer rounded-xl shadow-md">
            <h2 className="text-[26px] font-bold text-center text-orange-400 pb-1">
              Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex space-x-2">
                <div>
                  <label className="text-[15px] font-[590] text-white">
                    First Name
                  </label>
                  <input
                    title="First Name"
                    placeholder="Enter Your First Name"
                    type="text"
                    {...register("firstName")}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#31addb] "
                  />
                  {errors.firstName && (
                    <span className="mt-1 text-red-400">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-[15px] font-[590] text-white">
                    Last Name
                  </label>
                  <input
                    title="Last Name"
                    placeholder="Enter Your Last Name"
                    type="text"
                    {...register("lastName")}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#31addb]"
                  />
                  {errors.lastName && (
                    <span className="mt-1 text-red-400">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Mobile Number
                </label>
                <div className="flex">
                  <select
                    name="countryCode"
                    title="country code selection"
                    className="px-3 py-2 mt-1 border text-[15px] font-[590] border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#31addb]"
                  >
                    <option value="+91">+91 (IND)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                  </select>
                  <input
                    title="Mobile Number"
                    placeholder="Enter Your Mobile Number"
                    type="number"
                    min={0}
                    {...register("phone", {
                      setValueAs: (value) => Number(value),
                    })}
                    className="w-full px-3 py-2 text-[15px] font-[590] mt-1 ml-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#31addb]"
                  />
                </div>
                {errors.phone && (
                  <span className="mt-1 text-red-400">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="">
                <label className="block text-sm text-[15px] font-[590] text-white">
                  Create Password
                </label>
                <input
                  title="password"
                  placeholder="Enter Your Password"
                  type="password"
                  {...register("password")}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#31addb]"
                />
                {errors.password && (
                  <span className="mt-1 text-red-400">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="">
                {/* <Link href="/otp" className=""> */}
                {loading ? (
                  "Loading..."
                ) : (
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white hover:bg-[#00bbff] rounded-lg shadow-md bg-[#31addb] focus:outline-none"
                  >
                    Send OTP
                  </button>
                )}
                {/* </Link> */}
              </div>
            </form>
            <p className="text-center text-white">
              Already have an account?{" "}
              <a href="/auth/login" className="text-orange-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
