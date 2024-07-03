"use client";

import React, { useState } from "react";
import { X, Zap, Wifi, Download } from "lucide-react";
import app from "@/constants/app";
import Image from "next/image";

const InstallBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {/* Transparent fullscreen overlay */}
      <div
        onClick={() => setIsVisible(false)}
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
            onClick={() => console.log("Install app")}
          >
            <Download size={18} className="mr-2" />
            <span>Install</span>
          </button>
          <button
            className="text-gray-300 hover:text-white transition-colors duration-300 hidden sm:block"
            onClick={() => setIsVisible(false)}
          >
            <X size={28} />
          </button>
        </div>
      </div>
    </>
  );
};

export default InstallBanner;
