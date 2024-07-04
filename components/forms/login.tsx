"use client";

import LoginFormSchema from "@/validation/forms/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import SubmitButton from "../small/submit-button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.input<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: z.output<typeof LoginFormSchema>) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log("result", result);

    setInvalidLogin(true);

    if (!result) {
      toast.error("Invalid login", {
        description: "Please check your email and password",
      });

      return;
    }

    if (result.error) {
      toast.error("Invalid login", {
        description: "Please check your email and password",
      });

      return;
    }

    setInvalidLogin(false);

    if (result.ok) {
      toast.success("Logged in successfully", {
        description: "You are being redirected to your account.",
      });
    }

    router.replace("/account");
  };

  const [invalidLogin, setInvalidLogin] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {
        invalidLogin && <p
        className="bg-red-500 p-1 px-4 text-center rounded-xl text-white -mt-4 flex justify-between items-center rounded-br-none rounded-bl-none"
        >
          Invalid email or password.
          <button>
         <X
         onClick={()=>setInvalidLogin(false)}
         role="button"
         className="border rounded-full bg-red-500 hover:scale-125 transition-transform border-red-300 -mr-2 cursor-pointer"
         height={20}
         width={20}
         /></button>
        </p>
      }
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          {...register("email")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          {...register("password")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your password"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      <SubmitButton
        disabled={isSubmitting}
        isLoading={isSubmitting}
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Log In
      </SubmitButton>
    </form>
  );
};

export default LoginForm;
