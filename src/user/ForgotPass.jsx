import React from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { useFormik } from "formik";
import * as Yup from "yup";

function ForgotPass() {
  function callForgotPassApi(values) {
    console.log("email: ", values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  const { handleChange, handleBlur, values, touched, handleSubmit, errors } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: callForgotPassApi,
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
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL"
                className="grow text-white bg-transparent p-1 placeholder-white outline-none overflow-scroll"
              />
            </span>
            {touched.email && errors.email && (
              <div className="text-2xl text-red-300">{errors.email}</div>
            )}
            <span className="flex flex-col gap-1">
              <button
                className="text-sky-500 h-11 w-56 lg:w-72 p-2 text-2xl bg-white rounded-md shadow-md"
                type="submit"
              >
                Send OTP
              </button>
              <Link to="/signin" className="text-white text-left self-end">
                SignIn
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPass;
