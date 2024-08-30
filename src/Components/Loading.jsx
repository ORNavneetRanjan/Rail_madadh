import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <>
      <div className="min-h-screen text-center grow flex justify-center items-center text-4xl">
        <ImSpinner9 className="animate-spin text-sky-500" />
      </div>
    </>
  );
}

export default Loading;
