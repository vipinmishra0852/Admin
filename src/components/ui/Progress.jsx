import React from "react";

export const Progress = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className="bg-blue-500 h-2.5 rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);
