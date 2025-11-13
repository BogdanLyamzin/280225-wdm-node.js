import * as z from "zod";

import { email } from "../constants/validation.js";

export const registerSchema = z.object({
  username: z.string().min(1),
  email: z.string().regex(email.value, email.message),
  password: z.string().min(6, "Password must have at least 6 symbols"),
});

export type RegisterPayload = z.infer<typeof registerSchema>;

export const verifySchema = z.object({
  token: z.string().min(10),
});

export type VerifyPayload = z.infer<typeof verifySchema>;

export const loginSchema = z.object({
  email: z.string().regex(email.value, email.message),
  password: z.string().min(6, "Password must have at least 6 symbols"),
});

export type LoginPayload = z.infer<typeof registerSchema>;

export const resetPasswordSchema = z.object({
  email: z.string().regex(email.value, email.message),
});

export type ResetPasswordPayload = z.infer<typeof registerSchema>;
