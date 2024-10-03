import {z} from "zod"


export const SignupSchema = z.object({
   content:z.string().max(300,"message should not be greater than 300")
})