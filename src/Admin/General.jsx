import React from "react";
import Problems from "../Components/Problems";
function General({ ProblemsList }) {
  if (ProblemsList.length <= 0) {
    return <h1 className="text-2xl text-pink-900">No queries here</h1>;
  }
  console.log(ProblemsList);
  return (
    <>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
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
    </>
  );
}

export default General;
