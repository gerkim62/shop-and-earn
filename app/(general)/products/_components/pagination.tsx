"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  basePath,
}) => {
  const searchParams = useSearchParams();
  const paramsAsObject = Object.fromEntries(searchParams);
  return (
    <div className="flex justify-center items-center space-x-2">
      <Link
        href={{
          pathname: basePath,
          query: { ...paramsAsObject, page: currentPage - 1 },
        }}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 ${
          currentPage === 1 ? "pointer-events-none opacity-50" : ""
        }`}
        aria-disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Previous
      </Link>
      <span className="text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={{
          pathname: basePath,
          query: { ...paramsAsObject, page: currentPage + 1 },
        }}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 ${
          currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        }`}
        aria-disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-2" />
      </Link>
    </div>
  );
};
