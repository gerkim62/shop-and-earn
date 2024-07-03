"use client";

import React, { ComponentProps, FC } from "react";
import { useFormStatus } from "react-dom";
import { LoaderIcon } from "lucide-react";
import { Button } from "../ui/button";

type ButtonProps = ComponentProps<typeof Button>;
type Props = Omit<ButtonProps, "type"> & {
  type?: "submit";
  isLoading?: boolean;
};

const SubmitButton: FC<Props> = ({
  children,
  type = "submit",
  isLoading = false,
  ...props
}: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending || isLoading} type="submit" {...props}>
      {pending || isLoading ? (
        <LoaderIcon className="animate animate-spin mr-2" />
      ) : (
        ""
      )}
      {children}
    </Button>
  );
};

export default SubmitButton;
