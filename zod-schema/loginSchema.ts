import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z
    .string()
    .min(6, { message: "Password should be atleast 6 characters long" }),
});

export default LoginSchema;
