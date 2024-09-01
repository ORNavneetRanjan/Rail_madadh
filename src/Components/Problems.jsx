import axios from "axios";
import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { withProblem } from "../withProvider";

function Problems({
  discription,
  status,
  title,
  pid,
  ProblemsList,
  setProblemsList,
}) {
  let statusColor;
  if (status.toLowerCase() === "pending") {
    statusColor = "bg-red-400";
  } else if (status.toLowerCase() === "ongoing") {
    statusColor = "bg-yellow-400";
  } else {
    statusColor = "bg-green-400";
  }
  function handleClick() {
    let newStatus = "";
    if (status.toLowerCase() === "pending") {
      newStatus = "ONGOING";
    } else if (status.toLowerCase() === "ongoing") {
      newStatus = "COMPLETED";
    } else {
      newStatus = "ONGOING";
    }
    axios
      .patch(
        "https://ticket-booking-backend-30ae.onrender.com/admin/updateproblem",
        {
          pid: pid,
          status: newStatus,
        }
      )
      .then(() => {
        setProblemsList([...ProblemsList]);
      })
      .catch();
  }
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md w-full">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-lg text-gray-600 mb-2">{discription}</p>
      <span className="flex items-center gap-2">
        <FaDotCircle className={`text-xl ${statusColor}`} />
        <button
          onClick={handleClick}
          className={`font-semibold capitalize ${statusColor} px-2 py-1 rounded-md text-white`}
        >
          {status}
        </button>
      </span>
    </div>
  );
}

export default withProblem(Problems);
