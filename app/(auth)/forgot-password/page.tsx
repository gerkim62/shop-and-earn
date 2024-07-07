import contact from "@/constants/contact";
import React from "react";

const ForgotPasswordPage = () => {
  const email = contact.email;
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-900">
          Forgot your password?
        </h2>
      </div>

      <div className="mt-8 mx-auto max-w-[90vw] sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              To reset your password, please send an email to:
            </p>
            <p className="mt-1 text-lg font-medium text-purple-600">{email}</p>
            <p className="mt-2 text-sm text-gray-600">
              Include the words "RESET PASSWORD" in the email body.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Make sure to send the email from the same address you used to
              create your account.
            </p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">?</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="font-medium ">
                Send us the email and we will get back to you as soon as we can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
