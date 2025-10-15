import * as z from "zod";

import { phone, email } from "../constants/validation.js";

export const contactFullSchema = z.object({
    fullname: z
      .string()
      .min(1, "Fullname required")
      .max(100, "Too large fullname"),
    phone: z
      .string()
      .regex(
        phone.value,
        phone.message,
      ),
      email: z
      .string()
      .regex(
        email.value,
        email.message,
      ),
      categoryId: z.string(),
  });