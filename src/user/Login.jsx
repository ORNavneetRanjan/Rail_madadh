import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import { Link, Navigate } from "react-router-dom";
import Input from "../Components/Input";
import axios from "axios";
import { withAlert, withUser } from "../withProvider";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      console.log(response);
      console.log(bag);
      localStorage.setItem("token", token);
      bag.props.setAlert({ type: "success", message: "LoggedIn Successfully" });
      bag.props.setUser(user);
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        bag.props.setAlert({ type: "error", message: "Invalid Credentials" });
      }
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  email: "",
  password: "",
};

function Login({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
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
            value={values.email || ""}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
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
            value={values.password || ""}
            error={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
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

const FormikLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(Login);

export default withAlert(withUser(FormikLogin));
