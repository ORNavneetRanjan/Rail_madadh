import React from "react";
import { Link } from "react-router-dom";
function Card({ link, label }) {
  return (
    <>
      <Link
        to={"https://www.irctc.co.in/nget/"}
        className="flex flex-col gap-2 w-24  p-2"
      >
        <img src={link} className=" rounded-full " />
        <h2 className="font-sans text-xl text-center text-white">{label}</h2>
      </Link>
    </>
  );
}

export default Card;
