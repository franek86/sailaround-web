import React from "react";

const StackedList = (editList, deleteList, baseNumber) => {
  return (
    <div className='flex'>
      <div>Flag</div>
      <div>IT</div>
      <div>Italy</div>
      <div>55 bases</div>
      <div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
    </div>
  );
};

export default StackedList;
