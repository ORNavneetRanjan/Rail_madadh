import React, { useState } from "react";
import Card from "./Components/Card";
import { TbReport } from "react-icons/tb";
import { CiCircleList } from "react-icons/ci";
import { MdRateReview } from "react-icons/md";
import Complaint from "./Forms/Complaint";
import Track from "./Forms/Track";
import Review from "./Forms/Review";
function Home() {
  const [currentPage, setCurrentPage] = useState("complain");
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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1357772097/photo/station-platform-in-the-uk.jpg?s=612x612&w=0&k=20&c=fz_ftTDo-9osjcns1OkN0nfTWQf7an5VBU8WC7NIFRg=")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.99, // Adjust the opacity here
        }}
      />
      <div className="relative min-h-screen flex  px-8 py-10">
        <div className="w-1/3 flex flex-col h-full">
          <span className="flex justify-between">
            <Card
              link={"https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-1.png"              }
              label={"Ticket Booking"}
            />
            <Card
              link={
                "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-2.png"
              }
              label={"Train Enquiry"}
            />
            <Card
              link={
                "https://latestgovtjobs.in/wp-content/uploads/2017/10/railway-logo-300x300.png"
              }
              label={"Reservation Enquiry"}
            />
            <Card
              link={
                "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-4.png"
              }
              label={"Retiring Room Booking"}
            />
          </span>
          <span className="flex justify-between">
            <Card
              link={
                "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-5.png"
              }
              label={"Indian Railways"}
            />x
            <Card
              link={
                "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-2.png"
              }
              label={"UTS Ticketing"}
            />
            <Card
              link={
                "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-5.png"
              }
              label={"Freight Business"}
            />
            <Card
              link={
                "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-2.png"
              }
              label={"Railway Parcel Website"}
            />
          </span>
        </div>
        <div className="ml-5">
          <div className="flex flex-col items-center justify-center">
            <div className={"bg-pink-900 px-5 py-2 w-full" + complaintColor}>
              <button onClick={handleComplaintClick}>
                <CiCircleList className="text-5xl text-white m-auto" />
                <h1 className="font-sans text-white text-2xl">Complaint</h1>
              </button>
            </div>
            <div
              className={"bg-pink-900 px-5 py-2 flex flex-wrap " + trackColor}
            >
              <button onClick={handleTrackClick}>
                <TbReport className="text-5xl text-white m-auto" />
                <h1 className="font-sans text-white text-2xl">
                  Track Complaint
                </h1>
              </button>
            </div>
            <div className={"bg-pink-900 px-5 py-2 w-full" + suggestionColor}>
              <button onClick={handleSuggestionClick}>
                <MdRateReview className="text-5xl text-white m-auto" />
                <h1 className="font-sans text-white text-2xl">Suggestions</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="grow">
          {currentPage === "complain" && <Complaint />}
          {currentPage === "track" && <Track />}
          {currentPage === "suggestion" && <Review />}
        </div>
      </div>
    </div>
  );
}

export default Home;
