import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import { withUser } from "../withProvider";
import { Link } from "react-router-dom";

function ComplaintForm({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  user,
}) {
  const [inTrain, setInTrain] = useState(false);
  const [isAble, setAble] = useState(false);
  const [buttonColor, setColor] = useState("bg-gray-400");

  useEffect(() => {
    if (user) {
      setAble(true);
      setColor("bg-pink-900 hover:bg-red-700");
    }
  }, [user]);

  return (
    <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Complaint Form
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Are you inside the train?
          </label>
          <div className="flex items-center mt-1">
            <input
              type="checkbox"
              id="inTrain"
              name="inTrain"
              checked={inTrain}
              onChange={(e) => setInTrain(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="inTrain" className="text-sm text-gray-700">
              Yes
            </label>
          </div>
        </div>

        {inTrain && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              PNR Number:
            </label>
            <input
              type="text"
              id="pnrNumber"
              name="pnrNumber"
              value={values.pnrNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 block w-full border ${
                errors.pnrNumber && touched.pnrNumber
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50`}
              placeholder="Enter PNR Number"
              required={inTrain}
            />
            {touched.pnrNumber && errors.pnrNumber && (
              <p className="text-red-600 mt-1">*{errors.pnrNumber}</p>
            )}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`mt-1 block w-full border ${
              errors.description && touched.description
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50`}
            placeholder="Describe the issue"
            rows="4"
            required
          />
          {touched.description && errors.description && (
            <p className="text-red-600 mt-1">*{errors.description}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Image:
          </label>
          <input
            type="file"
            id="uploadImage"
            name="uploadImage"
            accept="image/*"
            onChange={(e) => setFieldValue("uploadImage", e.target.files[0])}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Audio:
          </label>
          <input
            type="file"
            id="uploadAudio"
            name="uploadAudio"
            accept="audio/*"
            onChange={(e) => setFieldValue("uploadAudio", e.target.files[0])}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Video:
          </label>
          <input
            type="file"
            id="uploadVideo"
            name="uploadVideo"
            accept="video/*"
            onChange={(e) => setFieldValue("uploadVideo", e.target.files[0])}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={!isAble}
          className={`w-full text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 ${buttonColor}`}
        >
          Submit
        </button>
        {!isAble && (
          <Link to={"/login"} className="block text-center text-pink-900 mt-2">
            Login to submit
          </Link>
        )}
      </form>
    </div>
  );
}

const Complaint = withFormik({
  mapPropsToValues: () => ({
    description: "",
    pnrNumber: "",
    uploadImage: null,
    uploadAudio: null,
    uploadVideo: null,
  }),

  validate: (values) => {
    const errors = {};
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (values.inTrain && !values.pnrNumber) {
      errors.pnrNumber = "PNR Number is required when in train";
    } else if (values.pnrNumber && !/^\d+$/.test(values.pnrNumber)) {
      errors.pnrNumber = "PNR Number must contain only digits";
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    console.log("Form Submitted", values);
    setSubmitting(false);
  },
})(ComplaintForm);

export default withUser(Complaint);
