"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignupFormSchema from "@/validation/forms/signup";
import { z } from "zod";
import signup from "@/actions/signup";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import SubmitButton from "../small/submit-button";
import nProgress from "nprogress";

type SignUpFormProps = {
  inviteCode: string | null;
};

const SignUpForm = ({ inviteCode }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof SignupFormSchema>) => {
    console.log(data);
    const { success, message, data: user } = await signup(data);

    if (!success) {
      toast.error("Something went wrong.", {
        description: message,
      });
      return;
    }

    toast.success("Account created successfully!", {
      description: "You are being redirected to Log In.",
    });

    console.log("Account created successfully!", user);

    nProgress.start();
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
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
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
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

      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="referralCode"
          className="text-sm font-medium text-gray-700"
        >
          Referral Code
        </label>
        <input
          value={inviteCode ?? ""}
          type="text"
          id="referralCode"
          {...register("referralCode")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
          readOnly={!!inviteCode}
        />
      </div>

      <SubmitButton
        isLoading={isSubmitting}
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Sign Up and Start Earning!
      </SubmitButton>
    </form>
  );
};

export default SignUpForm;
