import React from "react";
import { Link } from "react-router-dom";
function Card({ link, label, word }) {
  return (
    <>
      <Link to={word} className="flex flex-col  w-24  ml-2">
        <img src={link} className=" rounded-full " />
        <h2 className="font-sans text-xl text-center text-white">{label}</h2>
      </Link>
    </>
  );
}

export default Card;
