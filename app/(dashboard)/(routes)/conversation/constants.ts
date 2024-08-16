import * as z from "zod";//zod is used to define and validate data structures (schemas) in a concise and type-safe way.

export const formSchema = z.object({
    prompt: z.string().min(1, { //string has at least one character
        message: "Prompt is required",
    })
})