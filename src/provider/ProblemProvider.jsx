import React, { useEffect, useState } from "react";
import { ProblemContext } from "../Context";
import axios from "axios";
import Loading from "../Components/Loading";

function ProblemProvider({ children, user, setAlert }) {
  const [ProblemsList, setProblemsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const token = localStorage.getItem("token");
      axios
        .post(
          "https://ticket-booking-backend-30ae.onrender.com/users/getproblems",
          {
            token: token, // Sending token in the request body
          }
        )
        .then((response) => {
          setProblemsList(response.data.problems); // Update state with fetched problems
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((err) => {
          setAlert({
            type: "error",
            message: "Failed to fetch problems. Please try again.",
          }); // Handle errors
          setLoading(false);
        });
    }
  }, [user]); // Add user as a dependency to re-fetch data when user changes

  return (
    <ProblemContext.Provider value={{ ProblemsList, setProblemsList }}>
      {children}
    </ProblemContext.Provider>
  );
}

export default ProblemProvider;
