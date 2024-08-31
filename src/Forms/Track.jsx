import React, { useState } from "react";

function Track() {
  const [referenceNo, setReferenceNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Reference No.:", referenceNo);
  };

  return (
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
      <form onSubmit={handleSubmit} className="max-w-md  p-8 rounded-md ">
        <h2 className="text-lg font-semibold text-maroon-600 mb-6">
          Be with us for live tracking.
        </h2>

        <div className="mb-4">
          <label
            htmlFor="referenceNo"
            className="block text-sm font-bold mb-2 text-maroon-700"
          >
            Reference No.: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="referenceNo"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-600 focus:border-transparent"
            value={referenceNo}
            onChange={(e) => setReferenceNo(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-pink-900 w-full text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Track;
