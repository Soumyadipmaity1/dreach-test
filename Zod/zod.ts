import * as z from "zod";

export const SignUpSchema = z.object({
  firstName: z.string().min(2, {
    message: "Your must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Your must be at least 2 characters.",
  }),

  phone: z
    .number({
      message: "Please enter a valid number.",
    })
    .min(10, {
      message: "Please enter a valid number.",
    }),
  password: z.string().min(6, {
    message: "Your password must be at least 6 characters.",
  }),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const otpSchema = z.object({
  otp: z.number().min(6, {
    message: "Please enter a valid OTP.",
  }),
});

export type OtpSchemaType = z.infer<typeof otpSchema>;

export const SignInSchema = z.object({
  phone: z.string().min(5, {
    message: "Please enter a valid username",
  }),
  password: z.string().min(6, {
    message: "Your password must be at least 6 characters.",
  }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
