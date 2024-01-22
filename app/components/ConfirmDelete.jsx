"use client";
import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const ConfirmDelete = ({ name }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleDelete = () => {
    setShowConfirmDelete(true);
  };

  const confirmDelete = () => {
    setShowConfirmDelete(false);
  };

  const cancelDelete = () => {
    setShowConfirmDelete(false);
  };

  return (
    <>
      <div className="flex items-center bg-red-400 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-red-500" onClick={handleDelete}>
        <TrashIcon className="h-4 w-4 me-1" />
        <span className="hidden lg:block">Delete</span>
      </div>

      {showConfirmDelete && (
        <div className="confirm-wrapper">
          <div className="fixed bg-blue-400 text-white p-5 rounded-md shadow-lg flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p>Are you sure you want to delete - {name}?</p>
            <div className="flex my-3 justify-center gap-4">
              <button className="px-3 py-2 bg-red-400 hover:bg-red-400/70" onClick={confirmDelete}>
                Delete
              </button>
              <button className="px-3 py-2 bg-green-400 hover:bg-green-400/70" onClick={cancelDelete}>
                Leave
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmDelete;
