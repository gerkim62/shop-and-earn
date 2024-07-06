"use client";

import app from "@/constants/app";
import { Download, X, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const InstallBanner = () => {
  const [isInstalling, setIsInstalling] = useState(false);

  //for BeforeInstallPromptEvent Type, see: https://stackoverflow.com/questions/51503754/typescript-type-beforeinstallpromptevent

  const [deferredEvent, setDeferredEvent] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isBannerVisible, setIsBannerVisible] = useState(!!deferredEvent);

  // Listen for beforeinstallprompt event
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  const handleBeforeInstallPrompt = (event: Event) => {
    // Prevent the default behavior to keep the event available for later use
    event.preventDefault();

    // Save the event for later use
    setDeferredEvent(event as BeforeInstallPromptEvent);

    setIsBannerVisible(true);
  };

  async function install() {
    if (!deferredEvent) return;
    setIsInstalling(true);
    try {
      await deferredEvent.prompt();
      const { outcome } = await deferredEvent.userChoice;
      if (outcome === "accepted") {
        toast.success("Installed", {
          description: `${app.name} has been installed successfully!`,
        });
        setDeferredEvent(null);
      } else {
        toast.error("Cancelled", {
          description: `${app.name} installation was cancelled.`,
        });
      }
    } catch (error) {
      toast.error("Failed", {
        description: `Something went wrong while installing ${app.name}. Please try again later.`,
      });
    }
    setIsInstalling(false);
  }

  if (isInstalling) {
    return (
      <div
        className={`fixed z-50 inset-0 overflow-hidden dark:bg-white bg-black opacity-20 fade-in-20 ${
          isInstalling ? "" : "hidden"
        }`}
      ></div>
    );
  }

  if (!isBannerVisible) return null;

  return (
    <>
      {/* Transparent fullscreen overlay */}
      <div
        onClick={() => setIsBannerVisible(false)}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      />

      {/* Bottom fixed banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white p-4 flex items-center justify-between z-50 shadow-lg">
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              className="w-12 h-12 rounded-full"
              src={"/logo.jpeg"}
              height={48}
              width={48}
              alt="Logo"
            ></Image>
          </div>
          <div>
            <h3 className="font-bold sm:text-xl mb-1">{app.name} App</h3>
            <div className="flex items-center text-sm text-gray-300 ">
              <Zap size={16} className="mr-1 -ml-[2px]" />
              <span className="mr-3">Lightning fast!</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="bg-purple-500 text-white px-6 py-2 rounded-full sm:mr-4 font-medium hover:bg-purple-600 transition-colors duration-300 shadow-md flex items-center border"
            onClick={install}
          >
            <Download size={18} className="mr-2" />
            <span>Install</span>
          </button>
          <button
            className="text-gray-300 hover:text-white transition-colors duration-300 hidden sm:block"
            onClick={() => setIsBannerVisible(false)}
          >
            <X size={28} />
          </button>
        </div>
      </div>
    </>
  );
};

export default InstallBanner;
