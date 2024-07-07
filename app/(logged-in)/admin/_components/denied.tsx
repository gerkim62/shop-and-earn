import Link from "@/components/small/link-with-loader";
import React from "react";

const Denied = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-900">
            Access Denied
          </h2>
          <div className="mt-4 text-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <div className="text-center">
            <p className="text-xl font-medium text-gray-900">
              You don't have permission to view this page.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              If you believe this is an error, please contact your system
              administrator or try logging in again.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Link
              href="/products"
              className="w-full sm:w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Browse our Amazing Products &rarr;
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto flex justify-center py-2 px-4 border border-purple-300 rounded-md shadow-sm text-sm font-medium text-purple-700 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Denied;
