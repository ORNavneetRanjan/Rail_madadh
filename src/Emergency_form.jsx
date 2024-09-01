import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import axios from "axios";
import { withProblem, withUser } from "./withProvider";

function Emergency_form({ setProblemsList }) {
  const { t } = useTranslation(); // Initialize the hook
  const [inTrain, setInTrain] = useState(false);
  const [buttonColor, setColor] = useState("bg-pink-900 hover:bg-red-700");

  // State for form fields
  const [formData, setFormData] = useState({
    description: "",
    pnrNumber: "",
    uploadImage: null,
    uploadAudio: null,
    uploadVideo: null,
  });

  // State for errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.description) {
      newErrors.description = "Description is required";
    }
    if (inTrain && !formData.pnrNumber) {
      newErrors.pnrNumber = "PNR Number is required when in train";
    } else if (formData.pnrNumber && !/^\d+$/.test(formData.pnrNumber)) {
      newErrors.pnrNumber = "PNR Number must contain only digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formPayload = new FormData();
    formPayload.append("file", formData.uploadImage);

    try {
      const problemResponse = await axios.post(
        "https://ticket-booking-backend-30ae.onrender.com/users/addproblem",
        {
          title: "emergency",
          description: formData.description,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDQyZWZmMzg2ODg1NzE5ZTM1MThkYSIsImlhdCI6MTcyNTE4MTc4MCwiZXhwIjoxNzI1MjE3NzgwfQ.a-E0TFscJqDgmQLykSLg-Dzd_jry3NRoFFcrV5HUXv8",
        }
      );

      const newProblem = problemResponse.data.problem;
      setProblemsList((prevProblemsList) => [...prevProblemsList, newProblem]);
    } catch (error) {
      console.error("Error handling form submission:", error);
    }
  };

  return (
    <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg ">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {t("emergencyFormTitle")}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {t("areYouInsideTrain")}
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
              {t("yes")}
            </label>
          </div>
        </div>

        {inTrain && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {t("pnrNumber")}
            </label>
            <input
              type="text"
              id="pnrNumber"
              name="pnrNumber"
              value={formData.pnrNumber}
              onChange={handleChange}
              className={`mt-1 block w-full border ${
                errors.pnrNumber ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50`}
              placeholder={t("pnrNumber")}
              required={inTrain}
            />
            {errors.pnrNumber && (
              <p className="text-red-600 mt-1">*{errors.pnrNumber}</p>
            )}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {t("description")}
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50`}
            placeholder={t("description")}
            rows="4"
          />
          {errors.description && (
            <p className="text-red-600 mt-1">*{errors.description}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {t("uploadImage")}
          </label>
          <input
            type="file"
            id="uploadImage"
            name="uploadImage"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {t("uploadAudio")}
          </label>
          <input
            type="file"
            id="uploadAudio"
            name="uploadAudio"
            accept="audio/*"
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {t("uploadVideo")}
          </label>
          <input
            type="file"
            id="uploadVideo"
            name="uploadVideo"
            accept="video/*"
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>

        <button
          type="submit"
          className={`w-full text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 ${buttonColor}`}
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}

export default withUser(withProblem(Emergency_form));
