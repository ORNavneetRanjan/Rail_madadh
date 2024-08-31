import React, { useState } from "react";

function Review() {
  const [suggestion, setSuggestion] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ suggestion, description });
  };

  const handleReset = () => {
    setSuggestion("");
    setDescription("");
  };

  return (
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 rounded-md ">
        <h2 className="text-2xl font-bold text-maroon-600 mb-6">
          Suggestions Detail
        </h2>

        <div className="mb-4">
          <label
            htmlFor="suggestion"
            className="block text-sm font-bold mb-2 text-maroon-700"
          >
            Suggestion <span className="text-red-500">*</span>
          </label>
          <select
            id="suggestion"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-600 focus:border-transparent"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
          >
            <option value="" disabled>
              --Select--
            </option>
            {/* Add your suggestion options here */}
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-bold mb-2 text-maroon-700"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-600 focus:border-transparent"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="reset"
            onClick={handleReset}
            className="bg-gray-400 text-white font-bold py-2 px-4 rounded-md mr-2 hover:bg-gray-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-pink-900 text-white font-bold py-2 px-4 rounded-md hover:bg-maroon-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Review;
