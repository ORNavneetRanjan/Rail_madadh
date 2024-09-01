import React, { useEffect, useState } from "react";
import { UserContext } from "../Context";
import Loading from "../Components/Loading";
import axios from "axios";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const User = localStorage.getItem("user");
  useEffect(() => {
    if (token) {
      setUser(User);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [token]);
  if (loading) {
    return <Loading />;
  }
  return (
    <UserContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
