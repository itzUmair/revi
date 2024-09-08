"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(256, { message: "Email cannot exceed 256 characters" })
    .email(),
  password: z
    .string()
    .min(8, { message: "Password must contain atleast 8 characters" }),
});

export function LoginForm() {
  const [isShowPasswordActive, setIsShowPasswordActive] =
    useState<boolean>(false);

  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (!result?.ok) {
      if (result?.error === "Invalid email or password") {
        form.setError("email", {
          type: "custom",
          message: "Invalid email or password",
        });
        form.setError("password", {
          type: "custom",
          message: "Invalid email or password",
        });
      } else {
        toast({
          title: "Something went wrong!",
          description: "Wasn't able to log you in right now",
          variant: "destructive",
        });
      }
    } else {
      router.push("/");
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      {...field}
                      autoFocus
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
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="********"
                        {...field}
                        type={isShowPasswordActive ? "text" : "password"}
                      />
                    </FormControl>
                    <button
                      onClick={() =>
                        setIsShowPasswordActive((prevState) => !prevState)
                      }
                      type="button"
                      className="absolute top-1/2 -translate-y-1/2 right-2"
                    >
                      {isShowPasswordActive ? (
                        <EyeOpenIcon width={25} height={25} />
                      ) : (
                        <EyeClosedIcon width={25} height={25} />
                      )}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-brand-color  hover:bg-brand-color-focus"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-center w-full">
        Don&apos;t have an account?&nbsp;
        <Link href="/auth/signup" className="underline">
          Create an account
        </Link>
      </CardFooter>
    </Card>
  );
}
