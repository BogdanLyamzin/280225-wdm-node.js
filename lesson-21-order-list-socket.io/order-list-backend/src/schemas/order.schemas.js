import * as z from "zod";

export const orderFullSchema = z.object({
    status: z.enum(["new", "processing", "delivered"]),
    description: z.string()
    .min(1, "Description required")
    .max(500, "Too large description"),
})