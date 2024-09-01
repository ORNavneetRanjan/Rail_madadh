import React from "react";
import { FaDotCircle } from "react-icons/fa";

function Problems({ discription, status, title }) {
  let statusColor;
  if (status.toLowerCase() === "pending") {
    statusColor = "bg-red-400";
  } else if (status.toLowerCase() === "ongoing") {
    statusColor = "bg-yellow-400";
  } else {
    statusColor = "bg-green-400";
  }

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-lg text-gray-600 mb-2">{discription}</p>
      <span className="flex items-center gap-2">
        <FaDotCircle className={`text-xl ${statusColor}`} />
        <p
          className={`font-semibold capitalize ${statusColor} px-2 py-1 rounded-md text-white`}
        >
          {status}
        </p>
      </span>
    </div>
  );
}

export default Problems;
