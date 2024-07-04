"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import SubmitButton from "../small/submit-button";
import { useForm, Controller } from "react-hook-form";
import updateProfile from "@/actions/user";
import { toast } from "sonner";

type EditProfileModalProps = {
  children: React.ReactNode;
  user: {
    fullName: string;
  };
};

const EditProfileModal = ({ children, user }: EditProfileModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: user.fullName,
    },
  });

  async function onSubmit(data: { fullName: string }) {
    console.log("data", data);
    const { success, message } = await updateProfile({
      fullName: data.fullName,
    });

    if (success) {
      toast.success("Success!", {
        description: message,
      });
    } else {
      toast.error("Error!", {
        description: message,
      });
    }

    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullName" className="text-right">
              Full Name
            </Label>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input id="fullName" {...field} className="col-span-3" />
              )}
            />
          </div>
          {errors.fullName && (
            <p className="col-span-4 text-red-600">This field is required</p>
          )}
          <DialogFooter>
            <SubmitButton
              disabled={isSubmitting}
              isLoading={isSubmitting}
              type="submit"
            >
              Save changes
            </SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
