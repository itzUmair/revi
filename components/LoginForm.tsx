"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import loginAdmin from "@/app/admin/login/_actions/login_action";

const LoginFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z
    .string()
    .min(8, {
      message: "Password must contain atleast 8 characters",
    })
    .max(100, { message: "Password too long" }),
});

function LoginForm() {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isShowPassword, setIsShowPassword] = useState<Boolean>(false);

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    const result = await loginAdmin(values.email, values.password);
    console.log(result);
  }

  return (
    <Form {...form}>
      <form
        className="mx-auto md:max-w-96 mt-8 px-1"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-lg lg:text-2xl text-center">Login</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type={isShowPassword ? "text" : "password"}
                  placeholder="enter your password"
                  {...field}
                />
              </FormControl>
              <button
                type="button"
                onClick={() => setIsShowPassword((prevState) => !prevState)}
                className="text-xs italic underline"
              >
                show password
              </button>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-4" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
