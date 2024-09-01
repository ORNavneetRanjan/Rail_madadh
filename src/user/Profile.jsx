import React from "react";
import { withUser } from "../withProvider";

function Profile({ user, setUser }) {
  function handleClick() {
    localStorage.removeItem("token");
    setUser(undefined);
  }
  const User = JSON.parse(user);
  console.log(User);
  return (
    <>
      <div className="grow bg-gray-200 flex p-10">
        <div className="bg-pink-900 grow max-w-screen-lg m-auto h-svh flex flex-col gap-10 justify-center p-10 items-start lg:items-center">
          <div className="flex flex-col gap-5">
            <span>
              <h2 className="text-white text-xl font-sans">Full Name: </h2>
              <p className="text-yellow-400">{User.name}</p>
            </span>
            <span>
              <h2 className="text-white text-xl font-sans">Email: </h2>
              <p className="text-yellow-400">{User.email}</p>
            </span>
            <span>
              <h2 className="text-white text-xl font-sans">Joined on: </h2>
              <p className="text-yellow-400">{User.updatedAt}</p>
            </span>
            <button
              onClick={handleClick}
              className={
                "font-semibold text-pink-900 h-11 w-56 lg:w-72 p-2 text-2xl rounded-md shadow-md bg-white"
              }
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default withUser(Profile);
