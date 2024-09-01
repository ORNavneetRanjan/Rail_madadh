import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import axios from "axios";
import { withAlert, withUser } from "../withProvider";

function Login({ setAlert, setUser }) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const validate = () => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6 || values.password.length > 12) {
      errors.password = "Password must be between 6 and 12 characters";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear individual field errors as user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // API call
    axios
      .post("https://ticket-booking-backend-30ae.onrender.com/users/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setAlert({ type: "success", message: "Logged in successfully." });
        setUser(user);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            setAlert({ type: "error", message: "Invalid Credentials" });
          } else if (error.response.status === 404) {
            setAlert({ type: "error", message: "User not found." });
          } else {
            setAlert({
              type: "error",
              message: "Something went wrong. Please try again.",
            });
          }
        } else {
          // Handling network errors or other unexpected errors
          setAlert({
            type: "error",
            message: "Network error. Please check your connection.",
          });
        }
      });
  };

  return (
    <div className="grow bg-gray-200 flex p-10">
      <div className="bg-pink-900 grow max-w-screen-lg m-auto h-svh flex flex-col gap-10 justify-center items-center">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-1 m-auto"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/hi/7/7b/Indian_Railways_logo.png"
            className="shadow-lg shadow-fuchsia-500 text-white self-center h-28 lg:h-64 rounded-full"
            alt="Indian Railways Logo"
          />
          <Input
            label={<GoPerson className="h-full text-3xl text-white p-1" />}
            id="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="EMAIL"
            autoComplete="email"
            required
            className=" mt-3 rounded-b-none "
          />
          <Input
            label={<CiLock className="h-full text-3xl text-white p-1" />}
            id="password"
            value={values.password}
            error={errors.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="PASSWORD"
            required
            autoComplete="password"
            className=" mb-2 rounded-t-none"
          />
          {errors.general && (
            <p className="text-red-600 mt-0 mb-0">{errors.general}</p>
          )}
          <span className="flex flex-col gap-1">
            <button
              type="submit"
              className="mt-3 text-sky-500 h-11 w-56 lg:w-72 p-2 text-2xl rounded-md shadow-md bg-white"
            >
              LOGIN
            </button>
            <Link to="/forgot-pass" className="text-white text-left self-end">
              Forgot password ?
            </Link>
            <Link to="/signin" className="text-blue-800 text-left self-end">
              New here? SignIn
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default withAlert(withUser(Login));
