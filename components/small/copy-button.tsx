"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckCircleIcon } from "lucide-react";
import { toast } from "sonner";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;

type Props = (
  | {
      text: string;
    }
  | {
      link: string;
      baseUrl: string;
    }
  | {
      link: string;
      originIsBaseUrl: true;
    }
  | {
      link: string;
      dontNormalize: true;
    }
) &
  ButtonProps;

export default function CopyButton(props: Props) {
  const [copied, setCopied] = useState(false);

  function normalizeLink(link: string, baseUrl: string) {
    return new URL(link, baseUrl).href;
  }
  function getTextToCopy(props: Props): string {
    if ("text" in props) {
      return props.text;
    } else if ("link" in props) {
      if ("baseUrl" in props) {
        return normalizeLink(props.link, props.baseUrl);
      } else if ("originIsBaseUrl" in props && props.originIsBaseUrl) {
        return normalizeLink(props.link, window.location.origin);
      } else if ("dontNormalize" in props && props.dontNormalize) {
        return props.link;
      } else {
        return props.link; // default case if no specific flags are set
      }
    }
    toast.error("Failed to copy", {
      position: "bottom-right",
      description: "Invalid prop type for CopyButton",
    });

    throw new Error(
      JSON.stringify(props) + " is not a valid prop type for CopyButton"
    );
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getTextToCopy(props));
    toast.success("Text Copied!", {
      position: "bottom-right",
      description: `Copied to your clipboard successfully.`,
    });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button
      {...props}
      onClick={handleCopy}
      variant="outline"
      size="sm"
      className={
        "flex items-center gap-2" +
        (props.className ? " " + props.className : "")
      }
    >
      {copied ? (
        <>
          <CheckCircleIcon className="h-4 w-4" />
          Copy
        </>
      ) : (
        <>
          <CopyIcon className="h-4 w-4" />
          Copy
        </>
      )}
    </Button>
  );
}
