"use client";

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
import LoginSchema from "@/zod-schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactHTMLElement, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "./ui/checkbox";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  const togglePasswordVisibility = (checked: boolean) => {
    setShowPassword(checked);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 px-4 md:w-[25rem] md:mx-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="username@example.com"
                  {...field}
                />
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
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  {...field}
                />
              </FormControl>
              <span className="flex items-center gap-x-1">
                <Checkbox onCheckedChange={togglePasswordVisibility} />
                <p className="text-sm ">show password</p>
              </span>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
