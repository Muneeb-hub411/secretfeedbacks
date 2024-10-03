import {z} from "zod"


export const SignupSchema = z.object({
    username: z.string().min(3,"Lenght should be 3").max(10,"Lenght should not be greater than 10").includes("@",{message:"user name must contain @"}),
    email:z.string().email({message:"invalid email address"}),
    password:z.string().min(6,{message:"password must be atleast 6 character"})
})