import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Input from "./Input";
import { Navigate, useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  pnrNumber: Yup.string().required("PNR number is required"),
});

const initialValues = {
  pnrNumber: "",
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
            id="pnrNumber"
            value={values.pnrNumber || ""}
            error={errors.pnrNumber}
            touched={touched.pnrNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="pnrNumber"
            placeholder="PNR NUMBER"
            required
            className=" mt-3  "
          />

          <span className="flex flex-col gap-1">
            <button
              type="submit"
              className="font-semibold mt-3 text-pink-500  w-56 lg:w-72 p-2 text-3xl rounded-md shadow-md bg-white"
            >
              Log In
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

const FormikLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: async (values, { setErrors }) => {
    const options = {
      method: "GET",
      url: "https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/8531575878",
      headers: {
        "x-rapidapi-key": "aa9e14f317mshc9e1a294f88272fp13d375jsne4974ee081b5",
        "x-rapidapi-host": "pnr-status-indian-railway.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrors({ general: "Failed to fetch PNR status" });
    }
  },
})(Login);

export default FormikLogin;
