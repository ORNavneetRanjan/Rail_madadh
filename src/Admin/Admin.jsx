import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Emergency from "./Emergency";
import OverCrowded from "./OverCrowded";
import CoachCleaniness from "./CoachCleaniness";
import WindowDamaged from "./WindowDamaged";
import ToiletCleaniness from "./ToiletCleaniness";
import General from "./General";
function Admin() {
  const [allProblems, setAllProblems] = useState([]);
  const [currentPage, setPage] = useState("emergency");
  useEffect(() => {
    axios
      .get(
        "https://ticket-booking-backend-30ae.onrender.com/admin/getallproblems"
      )
      .then((response) => {
        setAllProblems(response.data);
      });
  }, []);

  console.log(allProblems);
  let overCrowded = [];
  let emergency = [];
  let coach_cleaniness = [];
  let window_damaged = [];
  let toilet_cleaniness = [];
  let general = [];
  for (const problem of allProblems) {
    console.log(problem);
    if (problem.title == "overcrowded \n") {
      overCrowded.push(problem);
    } else if (problem.title == "toilet_cleanliness") {
      toilet_cleaniness.push(problem);
    } else if (problem.title == "coach_cleanliness \n") {
      coach_cleaniness.push(problem);
    } else if (problem.title == "window_damaged \n") {
      window_damaged.push(problem);
    } else if (problem.title == "emergency") {
      emergency.push(problem);
    } else {
      general.push(problem);
    }
  }

  return (
    <>
      <div className="bg-gray-200 min-h-screen px-20 py-20">
        <div className="max-w-screen-lg bg-white min-h-screen m-auto">
          {/* 'Overcrowded', 'coach_cleaniness', 'toilet_cleaniness', 'window_damaged' */}
          <div className="w-full flex ">
            <div className="bg-red-600 p-5 grow text-center animate-bounce">
              <button onClick={() => setPage("emergency")}>
                <h1 className="text-white text-xl animate-pulse">Emergency</h1>
              </button>
            </div>
            <div className="bg-pink-900 p-5 grow border-r text-center">
              <button onClick={() => setPage("OverCrowded")}>
                <h1 className="text-white text-xl">OverCrowded</h1>
              </button>
            </div>
            <div className="bg-pink-900 p-5 grow border-r text-center">
              <button onClick={() => setPage("coach_cleaniness")}>
                <h1 className="text-white text-xl">Coach Cleaniness</h1>
              </button>
            </div>

            <div className="bg-pink-900 p-5 grow border-r text-center">
              <button onClick={() => setPage("toilet_cleaniness")}>
                <h1 className="text-white text-xl">Toilet Cleaniness</h1>
              </button>
            </div>

            <div className="bg-pink-900 p-5 grow text-center">
              <button onClick={() => setPage("window_damaged")}>
                <h1 className="text-white text-xl">Window Damaged</h1>
              </button>
            </div>
            <div className="bg-pink-900 p-5 grow text-center">
              <button onClick={() => setPage("general")}>
                <h1 className="text-white text-xl">General</h1>
              </button>
            </div>
          </div>
          {currentPage == "emergency" && <Emergency ProblemsList={emergency} />}
          {currentPage == "OverCrowded" && (
            <OverCrowded ProblemsList={overCrowded} />
          )}
          {currentPage == "coach_cleaniness" && (
            <CoachCleaniness ProblemsList={coach_cleaniness} />
          )}
          {currentPage == "window_damaged" && (
            <WindowDamaged ProblemsList={window_damaged} />
          )}
          {currentPage == "toilet_cleaniness" && (
            <ToiletCleaniness ProblemsList={toilet_cleaniness} />
          )}
          {currentPage == "general" && <General ProblemsList={general} />}
        </div>
      </div>
    </>
  );
}

export default Admin;
