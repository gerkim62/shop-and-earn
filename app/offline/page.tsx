import React from "react";
import { WifiOff } from "lucide-react";

const OfflinePage = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-md p-8 text-center">
        <WifiOff className="w-16 h-16 mx-auto text-purple-300 mb-6" />
        <h1 className="text-2xl font-bold mb-3 text-purple-800">
          Oops! You're offline
        </h1>
        <p className="text-purple-600 mb-6">
          Let's try to reconnect, shall we?
        </p>
        <button className="px-6 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors duration-300 font-medium shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-purple-300">
          Try Again ✨
        </button>
      </div>
    </div>
  );
};

export default OfflinePage;
