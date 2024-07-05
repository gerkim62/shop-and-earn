import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ====formatNumber====

const numberFormatter = new Intl.NumberFormat();
export function formatNumber(num: number) {
  return numberFormatter.format(num);
}

// ====copyToClipboard====

const unsecuredCopyToClipboard = (text: string): boolean => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus({preventScroll: true})
  textArea.select();

  let successful = false;
  try {
    successful = document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  
  document.body.removeChild(textArea);
  return successful;
};

/**
 * Copies the text passed as param to the system clipboard
 * Check if using HTTPS and navigator.clipboard is available
 * Then uses standard clipboard API, otherwise uses fallback
*/
export const copyToClipboard = async (content: string): Promise<boolean> => {
  if (window.isSecureContext && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(content);
      return true;
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
      return false;
    }
  } else {
    return unsecuredCopyToClipboard(content);
  }
};
