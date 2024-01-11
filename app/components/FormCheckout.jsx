"use client";
import React, { useState } from "react";

const FormCheckout = ({ label, checked }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input className={`me-2 ${isChecked ? "checked" : ""}`} type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
        <span className="text-sm text-gray-500">{label}</span>
      </label>
    </div>
  );
};

export default FormCheckout;
