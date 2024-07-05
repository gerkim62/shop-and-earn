"use client"

import { AlertTriangle } from 'lucide-react';

const ErrorPage = ({  }) => {
    const statusCode = null
  return (
    <div className="min-h-[80vh] bg-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
        <div className="relative inline-block mb-6">
          <AlertTriangle className="w-20 h-20 text-purple-300" />
          <span className="absolute bottom-0 right-0 bg-purple-100 text-purple-800 text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center">
            !
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-3 text-purple-800">Oops! Something went wrong</h1>
        <p className="text-purple-600 mb-2">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
        <p className="text-purple-600 mb-6">
          Don't worry, it's not you - it's us! We're working on fixing it.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors duration-300 font-medium shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          Refresh this page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;