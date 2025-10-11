import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { withAlert } from "../withProvider";

const themeMap = {
  success: {
    color: "bg-green-400 ",
    Icon: FaRegCheckCircle,
  },
  error: {
    color: "bg-red-400 ",
    Icon: MdErrorOutline,
  },
};

function Alert({ alert, setAlert, removeAlert }) {
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(removeAlert, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alert, removeAlert]);

  if (!alert) {
    return <></>;
  }

  console.log(alert);
  const { message, type } = alert;
  const { color, Icon } = themeMap[type];

  return (
    <>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6 bg-gray-200">
        <div
          className={
            "flex flex-col sm:flex-row justify-between items-center text-base sm:text-lg md:text-xl max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-screen-lg m-auto px-4 py-3 rounded-md shadow-lg " +
            color
          }
        >
          <span className="flex items-center gap-3 sm:gap-4 text-center sm:text-left mb-3 sm:mb-0">
            <Icon className="text-lg sm:text-xl" />
            <p className="break-words">{message}</p>
          </span>
          <button
            className="text-gray-800 hover:text-gray-700 font-semibold text-sm sm:text-base border-0 transition"
            onClick={() => setAlert(undefined)}
          >
            Dismiss
          </button>
        </div>
      </div>
    </>
  );
}

export default withAlert(Alert);
