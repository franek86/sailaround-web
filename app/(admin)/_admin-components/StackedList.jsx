import React from "react";
import Image from "next/image";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const StackedList = ({ shortCode, countryName, flagIcon, countBases }) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-[5rem,5rem,1fr_1fr_1fr] lg:grid-flow-col items-center gap-3 shadow-md p-5 mb-5 bg-zinc-50">
      {flagIcon && (
        <div className="w-8">
          <Image src={`http://localhost:5000/${flagIcon}`} width={40} height={40} alt={countryName} />
        </div>
      )}
      <div className="max-w-10">{shortCode}</div>
      <div className="uppercase">{countryName}</div>

      {countBases > 0 ? (
        <div className="badge__tootletip badge--teal">
          {countBases} bases
          <div className="tooltip">View all bases from {countryName}</div>
        </div>
      ) : (
        <div className="text-red-400 text-sm">No bases in {countryName}</div>
      )}

      <div className="flex justify-between lg:justify-end col-start-4 col-end-5 lg:col-span-5">
        <div className="me-3 flex items-center bg-blue-400 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-blue-500">
          <PencilIcon className="h-4 w-4 me-1" />
          <span className="hidden lg:block">Edit</span>
        </div>
        <div className="flex items-center bg-red-400 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-red-500">
          <TrashIcon className="h-4 w-4 me-1" />
          <span className="hidden lg:block">Delete</span>
        </div>
      </div>
    </div>
  );
};

export default StackedList;
