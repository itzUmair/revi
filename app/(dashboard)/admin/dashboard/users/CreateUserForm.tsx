"use client";

import { Button } from "@/components/ui/button";
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

import {
  Component1Icon,
  EyeClosedIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import { useToast } from "@/hooks/use-toast";
import { createNewUser } from "./actions";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().optional(),
  user_type: z.enum(["1", "2", "3"], {
    required_error: "User type is required",
  }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(256, { message: "Email cannot exceed 256 characters" })
    .email(),
  password: z
    .string()
    .min(8, { message: "Password must contain atleast 8 characters" }),
});

export function CreateUserForm() {
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [isShowPasswordActive, setIsShowPasswordActive] =
    useState<boolean>(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setFormSubmitting(true);
    const result = await createNewUser(values);
    if (!result.status) {
      form.setError("email", { type: "custom", message: result.message });
    } else {
      toast({
        title: "Account created successfully!",
        description: "New user added to the database",
      });
    }
    setFormSubmitting(false);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="john" {...field} autoFocus />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <FormField
            control={form.control}
            name="user_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue="3"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="User" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Admin</SelectItem>
                      <SelectItem value="2">Owner</SelectItem>
                      <SelectItem value="3">User</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
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
          <Button type="submit" disabled={formSubmitting} className="w-full">
            {formSubmitting ? (
              <Component1Icon
                className=" animate-spin"
                width={20}
                height={20}
              />
            ) : (
              "Create Account"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
