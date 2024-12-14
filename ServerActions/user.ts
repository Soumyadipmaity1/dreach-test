"use server";

import { cookies } from "next/headers";
import {
  setCookie,
  deleteCookie,
  hasCookie,
  getCookie,
  getCookies,
} from "cookies-next";
import { SignUpSchema, SignUpSchemaType } from "@/Zod/zod";
import { set } from "date-fns";

// import { cookies } from "next/headers";

export const registerUser = async (formdata: SignUpSchemaType) => {
  try {
    const result = SignUpSchema.safeParse(formdata);

    if (!result.success) {
      return {
        status: 400,
      };
    }

    const res = await fetch(`${process.env.SERVER_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: formdata.phone,
        password: formdata.password,
        firstName: formdata.firstName,
        lastName: formdata.lastName,
      }),
    });

    return {
      status: res.status,
    };
  } catch (error) {
    return {
      status: 500,
    };
  }
};

export const verifyUser = async (phone: string, otp: number) => {
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/user/verifyUserRegistration`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phone,
          otp: otp,
        }),
      },
    );

    const data = await res.json();
    return {
      status: res.status,
      message: data.message,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};

export const loginUser = async (phone: string, password: string) => {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone,
        password: password,
      }),
    });
    const data = await res.json();

    console.log(data);

    if (res.status === 201) {
      setCookie("Auth", data, {
        cookies,
      });
    }

    return {
      status: res.status,
      message: data.message,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};
