"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const FormUpload = ({ register, icon, setValue, watch }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    handleImage(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const handleImage = (file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setValue("image", imageUrl);
    }
  };

  const handleDeleteImage = () => {
    setValue("image", null);
  };

  const image = watch("image");

  return (
    <div className="flex w-full" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      {image ? (
        <div className="relative">
          <img src={image} alt="Profile" style={{ maxWidth: "200px" }} />
          <div className="cursor-pointer" onClick={handleDeleteImage}>
            <XMarkIcon className="h-6 w-6 p-1 bg-red-600 text-white rounded-full absolute top-[-6px] right-[-6px] hover:bg-red-400" />
          </div>
        </div>
      ) : (
        <>
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {icon}
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" {...register} onChange={handleImageChange} />
          </label>
        </>
      )}
    </div>
  );
};

export default FormUpload;
