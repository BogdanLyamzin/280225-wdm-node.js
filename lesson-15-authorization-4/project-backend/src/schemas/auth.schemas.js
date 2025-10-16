import * as z from "zod";

import { email } from "../constants/validation.js";

export const registerSchema = z.object({
  username: z.string().min(1),
  email: z.string().regex(email.value, email.message),
  password: z.string().min(6, "Password must have at least 6 symbols"),
});

export const loginSchema = z.object({
  email: z.string().regex(email.value, email.message),
  password: z.string().min(6, "Password must have at least 6 symbols"),
});
