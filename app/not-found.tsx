import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
        <div className="relative inline-block mb-6">
          <Search className="w-20 h-20 text-purple-300" />
          <span className="absolute top-0 right-0 bg-purple-100 text-purple-800 text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center">
            ?
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-3 text-purple-800">Oops! Page Not Found</h1>
        <p className="text-purple-600 mb-6">
          We've looked high and low, but couldn't find what you're looking for.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors duration-300 font-medium shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          Go Home 🏠
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;