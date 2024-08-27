import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex  justify-between items-center p-4 bg-gray-100">
      <span className="flex gap-2">
        <div className="flex items-center space-x-4">
          <img
            src="https://railmadad.indianrailways.gov.in/madad/final/images/logog20.png"
            alt="Indian Government Logo"
            className="h-12"
          />
        </div>

        <div className="flex flex-col text-center text-sm text-gray-600 ">
          <h1 className="text-4xl font-bold text-pink-900">RailMadad</h1>
          For Inquiry, Assistance & Grievance Redressal
        </div>
      </span>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 gap-5">
          <div className="animate-pulse  bg-red-800 text-white p-2 rounded shadow-lg flex items-center justify-center">
            <LuPhoneCall className="text-3xl mt-1" />
            <span className="text-4xl ">139</span>
          </div>
          <span className=" text-xl ">for Security/Medical Assistance</span>
        </div>
        <Link
          to={"/login"}
          className="bg-blue-100 text-blue-700 py-1 px-3 rounded text-2xl"
        >
          Log In
        </Link>

        <select className="border rounded px-2 py-1">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnZfrsoMV0WBHUnjisKhOL1vnbmWcC25euA&s"
          alt="Accessibility Icon"
          className="h-10"
        />
      </div>
    </div>
  );
}

export default Header;
