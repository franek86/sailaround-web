"use client";
import React from "react";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import { toast } from "react-toastify";

import { PencilIcon } from "@heroicons/react/24/outline";
import ConfirmDelete from "@/app/components/ConfirmDelete";

const StackedList = ({ shortCode, countryName, flagIcon, countBases, id }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/countries/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const { message } = await response.json();
        toast.success(message, { autoClose: 2000 });
        revalidateTag("countries");
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.message };
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      return { success: false, message: "Error deleting item" };
    }
  };

  return (
    <div className='grid grid-cols-3 lg:grid-cols-[5rem,5rem,1fr_1fr_1fr] lg:grid-flow-col items-center gap-3 shadow-md p-5 mb-5 bg-zinc-50'>
      {flagIcon && (
        <div className='w-8'>
          <Image src={`http://localhost:5000/${flagIcon}`} width={40} height={40} alt={countryName} />
        </div>
      )}
      <div className='max-w-10'>{shortCode}</div>
      <div className='uppercase'>{countryName}</div>

      {countBases > 0 ? (
        <div className='badge__tootletip badge--teal'>
          {countBases} bases
          <div className='tooltip'>View all bases from {countryName}</div>
        </div>
      ) : (
        <div className='text-red-400 text-sm'>No bases in {countryName}</div>
      )}

      <div className='flex justify-between lg:justify-end col-start-4 col-end-5 lg:col-span-5'>
        <div className='me-3 flex items-center bg-blue-400 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-blue-500'>
          <PencilIcon className='h-4 w-4 me-1' />
          <span className='hidden lg:block'>Edit</span>
        </div>
        <ConfirmDelete itemId={id} name={countryName} onDelete={handleDelete} />
        {/* <div className="flex items-center bg-red-400 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-red-500">
          <TrashIcon className="h-4 w-4 me-1" />
          <span className="hidden lg:block">Delete</span>
        </div> */}
      </div>
    </div>
  );
};

export default StackedList;
