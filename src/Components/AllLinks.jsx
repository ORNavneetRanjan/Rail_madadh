import React from "react";
import Card from "./Card";
function AllLinks() {
  return (
    <>
      <div className="flex flex-col h-full w-1/3">
        <span className="flex  w-full gap-3">
          <Card
            link={
              "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-1.png"
            }
            label={"Ticket Booking"}
            word={"https://www.irctc.co.in/nget/train-search"}
          />
          <Card
            link={
              "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-2.png"
            }
            label={"Train Enquiry"}
            word="https://enquiry.indianrail.gov.in/mntes/"
          />
          <Card
            link={
              "https://latestgovtjobs.in/wp-content/uploads/2017/10/railway-logo-300x300.png"
            }
            label={"Reservation Enquiry"}
            word={
              "https://www.indianrail.gov.in/enquiry/StaticPages/StaticEnquiry.jsp?StaticPage=index.html"
            }
          />
          <Card
            link={
              "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-4.png"
            }
            label={"Retiring Room Booking"}
            word={"https://rr.irctc.co.in/home#/home"}
          />
        </span>
        <span className="flex justify-between">
          <Card
            link={
              "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-5.png"
            }
            label={"Indian Railways"}
            word={"https://indianrailways.gov.in/"}
          />

          <Card
            link={
              "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-2.png"
            }
            label={"UTS Ticketing"}
            word={
              "https://play.google.com/store/apps/details?id=com.cris.utsmobile&hl=en_IN&pli=1"
            }
          />
          <Card
            link={
              "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-5.png"
            }
            label={"Freight Business"}
            word={"https://www.fois.indianrail.gov.in/RailSAHAY/index.jsp"}
          />
          <Card
            link={
              "https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-2.png"
            }
            label={"Railway Parcel Website"}
            word={"https://parcel.indianrail.gov.in/"}
          />
        </span>
      </div>
    </>
  );
}

export default AllLinks;
