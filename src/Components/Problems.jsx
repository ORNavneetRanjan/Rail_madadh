import React from "react";
function Problems({ discription, status, category }) {
  let statusColor;
  if (status === "pending") {
    statusColor = " bg-red-400";
  } else if (status == "onGoing") {
    statusColor = " bg-yellow-400";
  } else {
    statusColor = " bg-green-400";
  }

  return (
    <>
      <div>
        <h1 className="text-xl font-sans">{discription}</h1>
      </div>
    </>
  );
}

export default Problems;
