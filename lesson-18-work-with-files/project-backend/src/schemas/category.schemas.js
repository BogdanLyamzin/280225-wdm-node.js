import * as z from "zod";

export const categoryFullSchema = z.object({
    name: z.string()
    .min(1, "Fullname required")
    .max(100, "Too large fullname"),
})