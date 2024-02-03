"use client";
import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation.js";

const Pagination = ({ currentPage, totalPages, onPageChange, nextPage, prevPage }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => {
    return index + 1;
  });

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (p) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", p);
    router.replace(`${pathName}?${params.toString()}`);
    onPageChange(p);
  };

  return (
    <div className='flex items-center justify-between'>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <nav className='isolate inline-flex -space-x-px rounded-sm shadow-sm' aria-label='Pagination'>
            <div
              onClick={() => {
                handleClick("prev");
              }}
              className='cursor-pointer relative inline-flex items-center p-1 text-gray-400 hover:bg-gray-50'
            >
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' />
            </div>
            {pages.map((pageNumb) => {
              return (
                <div
                  key={pageNumb}
                  onClick={() => handleClick(pageNumb)}
                  className={`cursor-pointer relative z-10 inline-flex items-center px-3 py-2  
                  ${pageNumb === currentPage ? "bg-blue-500 text-white" : "bg-grey-400 text-black"}
                  text-sm`}
                >
                  {pageNumb}
                </div>
              );
            })}

            <div onClick={() => handleClick("next")} className='cursor-pointer relative inline-flex items-center p-1 text-gray-400 hover:bg-gray-50'>
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
