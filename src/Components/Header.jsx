import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { TbUrgent } from "react-icons/tb";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 p-4 bg-gray-100 w-full">
      {/* Left Section */}
      <span className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start">
          <img
            src="https://railmadad.indianrailways.gov.in/madad/final/images/logog20.png"
            alt="Indian Government Logo"
            className="h-10 sm:h-12"
          />
        </div>

        <div className="flex flex-col text-center sm:text-left text-sm text-gray-600">
          <Link to={"/"}>
            <h1 className="text-3xl sm:text-4xl font-bold text-pink-900 leading-tight">
              RailMadad
            </h1>
            <p className="text-xs sm:text-sm">
              For Inquiry, Assistance & Grievance Redressal
            </p>
          </Link>
        </div>
      </span>

      {/* Emergency Button */}
      <div className="animate-pulse bg-red-800 text-white px-4 py-2 rounded shadow-lg flex items-center justify-center gap-2 text-center">
        <TbUrgent className="text-3xl sm:text-5xl" />
        <Link to={"/emergency"} className="text-2xl sm:text-4xl font-semibold">
          Emergency
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 gap-4 sm:gap-6">
        <div className="flex items-center justify-center sm:justify-start">
          <div className="bg-red-800 text-white px-3 py-2 rounded shadow-lg flex flex-col items-center justify-center text-center">
            <span className="flex items-center justify-center gap-2">
              <LuPhoneCall className="text-2xl sm:text-3xl" />
              <Link to={"tel:+139"} className="text-2xl sm:text-3xl">
                139
              </Link>
            </span>
            <p className="text-xs sm:text-sm mt-1">for help and support</p>
          </div>
        </div>

        <Link to={"/Profile"} className="text-pink-900 py-1 px-3">
          <CgProfile className="text-4xl sm:text-5xl" />
        </Link>

        <select className="border rounded px-2 py-1 text-sm sm:text-base">
          <option>English</option>
          <option>Hindi</option>
        </select>

        <button className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnZfrsoMV0WBHUnjisKhOL1vnbmWcC25euA&s"
            alt="Accessibility Icon"
            className="h-8 sm:h-10"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
