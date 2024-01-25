import React from "react";

const Spinner = () => {
  return (
    <div className='flex items-center justify-center w-full h-full absolute top-0 left-0 bg-gray-100/15'>
      <div className='animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-500 rounded-full dark:text-blue-500' role='status' aria-label='loading'></div>
      <div className='ms-2 '>Loading...</div>
    </div>
  );
};

export default Spinner;
