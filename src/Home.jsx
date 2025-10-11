import React, { useState } from "react";
import Card from "./Components/Card";
import { TbReport } from "react-icons/tb";
import { CiCircleList } from "react-icons/ci";
import { MdRateReview } from "react-icons/md";
import Complaint from "./Forms/Complaint";
import Track from "./Track";
import Review from "./Forms/Review";
import AllLinks from "./Components/AllLinks";
import UserRoute from "./Routes/UserRoute";

function Home() {
  const [currentPage, setCurrentPage] = useState("complain");

  // Assign color based on current page
  let complaintColor = "";
  let trackColor = "";
  let suggestionColor = "";
  let color = " bg-pink-400";
  if (currentPage === "complain") {
    complaintColor = color;
  } else if (currentPage === "track") {
    trackColor = color;
  } else {
    suggestionColor = color;
  }

  // Event handlers for button clicks
  function handleComplaintClick() {
    setCurrentPage("complain");
  }
  function handleTrackClick() {
    setCurrentPage("track");
  }
  function handleSuggestionClick() {
    setCurrentPage("suggestion");
  }

  return (
    <div className="relative w-full min-h-screen">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/lv_0_20240831142430.mp4"
        autoPlay
        loop
        muted
      />

      <div className="relative min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-10 bg-black bg-opacity-50 gap-10 lg:gap-20">
        <AllLinks />

        <span className="flex flex-col lg:flex-row w-full lg:w-3/4 gap-8 lg:gap-0">
          {/* Sidebar Buttons */}
          <div className="flex flex-col w-full sm:w-60 lg:w-40 mb-6 lg:mb-0">
            {/* Complaint Button */}
            <div
              className={
                "bg-pink-900 px-5 py-2 w-full rounded-t-lg" + complaintColor
              }
            >
              <button
                onClick={handleComplaintClick}
                className="flex flex-col m-auto items-center"
              >
                <CiCircleList className="text-4xl sm:text-5xl text-white" />
                <h1 className="font-sans text-white text-lg sm:text-xl">
                  Complaint
                </h1>
              </button>
            </div>
            <hr className="border-gray-700" />

            {/* Track Complaint Button */}
            <div
              className={"bg-pink-900 px-5 py-2 flex flex-wrap " + trackColor}
            >
              <button
                onClick={handleTrackClick}
                className="flex flex-col m-auto items-center"
              >
                <TbReport className="text-4xl sm:text-5xl text-white m-auto" />
                <h1 className="font-sans text-white text-lg sm:text-xl text-center">
                  Track Complaint
                </h1>
              </button>
            </div>
            <hr className="border-gray-700" />

            {/* Suggestions Button */}
            <div
              className={
                "bg-pink-900 px-5 py-2 w-full rounded-b-lg" + suggestionColor
              }
            >
              <button
                onClick={handleSuggestionClick}
                className="flex flex-col m-auto items-center"
              >
                <MdRateReview className="text-4xl sm:text-5xl text-white" />
                <h1 className="font-sans text-white text-lg sm:text-xl">
                  Suggestions
                </h1>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grow w-full">
            {currentPage === "complain" && <Complaint />}
            {currentPage === "track" && (
              <UserRoute>
                <Track />
              </UserRoute>
            )}
            {currentPage === "suggestion" && <Review />}
          </div>
        </span>
      </div>
    </div>
  );
}

export default Home;
