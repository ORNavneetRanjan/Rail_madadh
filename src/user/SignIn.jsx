import React, { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { UserContext } from "../Context";
import { withUser } from "../withProvider";
function SignIn({ setUser }) {
  function callSignInApi(values) {
    axios
      .post("https://myeasykart.codeyogi.io/signup", {
        fullName: values.username,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        setUser(user);
      })
      .catch((error) => {
        console.log("Signup failed", error);
      });
  }

  const schema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(18).required(),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required(),
  });

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        cpassword: "",
      },
      onSubmit: callSignInApi,
      validationSchema: schema,
    });

  return (
    <>
      <div className="grow bg-gray-200 flex p-10">
        <div className="bg-pink-900 grow max-w-screen-lg m-auto h-svh flex flex-col gap-10 justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="gap-2 flex flex-col justify-center items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/hi/7/7b/Indian_Railways_logo.png"
              className="shadow-lg shadow-fuchsia-500 text-white self-center h-28 lg:h-64 rounded-full"
              alt="Indian Railways Logo"
            />
            <span className="h-11 w-56 lg:w-72 flex border-2 border-solid gap-2">
              <GoPerson className="h-full text-3xl text-white p-1" />
              <input
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="username"
                name="username"
                placeholder="USERNAME"
                className="grow text-white bg-transparent p-1 placeholder-white outline-none overflow-scroll"
              />
            </span>
            {touched.username && errors.username && (
              <div className="text-red-600">* {errors.username}</div>
            )}

            <span className="h-11 w-56 lg:w-72 flex border-2 border-solid gap-2">
              <TfiEmail className="h-full text-3xl text-white p-1" />
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL"
                className="grow text-white bg-transparent p-1 placeholder-white outline-none overflow-scroll"
              />
            </span>
            {touched.email && errors.email && (
              <div className="text-red-600">* {errors.email}</div>
            )}

            <span className="h-11 w-56 lg:w-72 flex border-2 border-solid gap-2">
              <CiLock className="h-full text-4xl text-white p-1" />
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                id="password"
                name="password"
                placeholder="PASSWORD"
                className="grow text-white bg-transparent p-1 placeholder-white outline-none overflow-scroll"
              />
            </span>
            {touched.password && errors.password && (
              <div className="text-red-600">* {errors.password}</div>
            )}

            <span className="h-11 w-56 lg:w-72 flex border-2 border-solid gap-2">
              <CiLock className="h-full text-4xl text-white p-1" />
              <input
                value={values.cpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                id="cpassword"
                name="cpassword"
                placeholder="CONFIRM PASSWORD"
                className="grow text-white bg-transparent p-1 placeholder-white outline-none overflow-scroll"
              />
            </span>
            {touched.cpassword && errors.cpassword && (
              <div className="text-red-600">* {errors.cpassword}</div>
            )}

            <span className="flex flex-col gap-1">
              <button
                type="submit"
                disabled={Object.keys(errors).length > 0}
                className={
                  "text-sky-500 h-11 w-56 lg:w-72 p-2 text-2xl rounded-md shadow-md " +
                  (Object.keys(errors).length > 0
                    ? "bg-gray-500 "
                    : "bg-white ")
                }
              >
                SIGNIN
              </button>
              <Link to="/login" className="text-blue-800 text-left self-end">
                Already a user? Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default withUser(SignIn);
