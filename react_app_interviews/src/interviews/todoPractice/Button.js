"use client";
import React from "react";

const ButtonComponent = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-200 shadow-md rounded-md ms-2 p-2 "
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
