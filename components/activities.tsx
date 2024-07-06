"use client";

import limits from "@/constants/limits";
import rewards from "@/constants/rewards";
import { AlertCircle, DollarSign, Gift, LucideIcon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { formatNumber } from "@/lib/utils";
import { RECEIVE_NOTIFICATIONS_ABOUT_OTHERS_LOCALSTORAGE_KEY } from "@/constants/storage";
import { useLocalStorage } from "usehooks-ts";

const names = [
  // Common names in Kenya
  "John",
  "Emma",
  "Michael",
  "Sophia",
  "William",
  "Olivia",
  "James",
  "Ava",
  "Benjamin",
  "Isabella",
  "Mwangi",
  "Achieng",
  "Wanjiru",
  "Kibet",
  "Mutua",
  "Njeri",
  "Odhiambo",
  "Kamau",
  "Wairimu",
  "Muthoni",
  "Omondi",
  "Wambui",
  "Chebet",
  "Otieno",
  "Ndungu",
  "Nyambura",
  "Kipchoge",
  "Anyango",
  "Karanja",
  "Cheruiyot",
  "Waithera",
  "Kimani",
  "Ouko",
  "Makena",
  "Njenga",
  "Owino",
  "Kirui",
  "Wacera",
  "Mwende",
  "Obuya",
  "Wafula",
  "Mutiso",
  "Nyang'au",
  "Okoth",
  "Cherono",
  "Kagure",
  "Nyakio",
];

const getRandomElement = (array: string[]): string =>
  array[Math.floor(Math.random() * array.length)] ?? "Smartphone";
const getRandomAmount = (): number => Math.floor(Math.random() * 1000) + 100;
const getRandomWithdrawalAmount = (): number =>
  Math.floor(Math.random() * limits.withdrawal) + limits.withdrawal;

const maskName = (name: string): string => {
  if (name.length <= 2) {
    return name; // If the name is too short, return it as is.
  }
  const middle = "*".repeat(name.length - 2);
  return name.charAt(0) + middle + name.charAt(name.length - 1);
};
interface ToastProps {
  message: string;
  icon: LucideIcon;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, icon: Icon, onClose }) => (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white p-4 rounded-md shadow-lg flex items-center space-x-2 z-50 sm:max-w-md w-full max-w-[90%]">
    <Icon size={20} />
    <p className="flex-grow">{message}</p>
    <button onClick={onClose} className="focus:outline-none">
      <X size={20} />
    </button>
  </div>
);

const TOAST_DISPLAY_TIME = 14000;
const INITIAL_TOAST_MIN_TIME = 4000;
const INITIAL_TOAST_MAX_TIME = 15000;
const SUBSEQUENT_TOAST_MIN_TIME = 31000;
const SUBSEQUENT_TOAST_MAX_TIME = 60000;

const getRandomTime = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Activities: React.FC = () => {
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [receiveNotifications] = useLocalStorage(
    RECEIVE_NOTIFICATIONS_ABOUT_OTHERS_LOCALSTORAGE_KEY,
    true
  );

  useEffect(() => {
    const generateToast = () => {
      if (!receiveNotifications) {
        return;
      }
      const random = Math.random();
      let message: string;
      let icon: LucideIcon;

      if (random < 1 / 3) {
        const name = maskName(getRandomElement(names));
        message = `${name} just earned KSH ${formatNumber(
          rewards.onSignup.referrer
        )} by referring a friend!`;
        icon = Gift;
      } else if (random < 2 / 3) {
        const name = maskName(getRandomElement(names));
        const amount = formatNumber(getRandomAmount());
        message = `${name} has redeemed KSH ${amount} during checkout!`;
        icon = AlertCircle;
      } else {
        const name = maskName(getRandomElement(names));
        const withdrawalAmount = formatNumber(getRandomWithdrawalAmount());
        message = `${name} just withdrew KSH ${withdrawalAmount} via M-Pesa!`;
        icon = DollarSign;
      }

      setToast({ message, icon, onClose: () => setToast(null) });

      setTimeout(() => setToast(null), TOAST_DISPLAY_TIME);
    };
    const initialToastTime = getRandomTime(
      INITIAL_TOAST_MIN_TIME,
      INITIAL_TOAST_MAX_TIME
    );
    const showToastWithRandomInterval = () => {
      generateToast();
      const nextToastTime = getRandomTime(
        SUBSEQUENT_TOAST_MIN_TIME,
        SUBSEQUENT_TOAST_MAX_TIME
      );
      setTimeout(showToastWithRandomInterval, nextToastTime);
    };

    const initialTimeout = setTimeout(
      showToastWithRandomInterval,
      initialToastTime
    );
    return () => clearTimeout(initialTimeout);
  }, [receiveNotifications]);

  if (!receiveNotifications) {
    return null;
  }

  if (!navigator?.onLine) {
    return null;
  }

  return toast ? (
    <Toast message={toast.message} icon={toast.icon} onClose={toast.onClose} />
  ) : null;
};

export default Activities;
