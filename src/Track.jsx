import React from "react";
import { withProblem } from "./withProvider";
import Problems from "./Components/Problems"; // Ensure this path is correct

function Track({ ProblemsList }) {
  if (ProblemsList.length <= 0) {
    return (
      <>
        <div className="bg-white h-full text-center flex flex-col items-center justify-center">
          <h1 className="text-xl text-pink-900">NO Problem Listed</h1>
        </div>
      </>
    );
  }
  return (
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
      {/* Render list of problems */}
      <div className="space-y-4">
        {ProblemsList.map((problem) => (
          <Problems
            key={problem._id}
            pid={problem._id}
            title={problem.title}
            discription={problem.description}
            status={problem.status}
          />
        ))}
      </div>
    </div>
  );
}

export default withProblem(Track);
