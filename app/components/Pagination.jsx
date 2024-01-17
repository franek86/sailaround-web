import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-sm shadow-sm" aria-label="Pagination">
            <a href="#" className="relative inline-flex items-center rounded-l-md p-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" />
            </a>

            <a href="#" aria-current="page" className="relative z-10 inline-flex items-center px-3 bg-blue-500 text-sm text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              1
            </a>

            <a href="#" className="relative inline-flex items-center rounded-r-md p-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
