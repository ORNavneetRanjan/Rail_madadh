import React, { useState } from "react";
import { Link } from "react-router-dom";
function Admin() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen px-20 py-20">
        <div className="max-w-screen-lg bg-white min-h-screen m-auto">
          {/* 'Overcrowded', 'coach_cleaniness', 'toilet_cleaniness', 'window_damaged' */}
          <div className="w-full flex ">
            <div className="bg-pink-900 p-5 grow border-r text-center">
              <Link>
                <h1 className="text-white text-xl">OverCrowded</h1>
              </Link>
            </div>
            <div className="bg-pink-900 p-5 grow border-r text-center">
              <Link>
                <h1 className="text-white text-xl">Coach Cleaniness</h1>
              </Link>
            </div>

            <div className="bg-pink-900 p-5 grow border-r text-center">
              <Link>
                <h1 className="text-white text-xl">Toilet Cleaniness</h1>
              </Link>
            </div>

            <div className="bg-pink-900 p-5 grow text-center">
              <Link>
                <h1 className="text-white text-xl">Window Damaged</h1>
              </Link>
            </div>
            <div className="bg-red-600 p-5 grow text-center animate-bounce">
              <Link>
                <h1 className="text-white text-xl animate-spin">Emergency</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
