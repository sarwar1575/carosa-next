"use client";

import { useState } from "react";

function CallUsForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleBlur = (e) => {
    if (!formData[e.target.name].trim()) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: `${e.target.name === "fullName" ? "Name" : "Phone Number"} is required`,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Name is required";
    }
    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone Number is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log("Form submitted", formData);
  };

  return (
    <div className="callFormMain">
      <form onSubmit={handleSubmit} className="callBackForm">
        {/* Full Name */}
        <div className="inputBody mb-2">
          <label className="mb-1 fSize-2 fw-medium text-dark">Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            className="w-100 d-inline-block py-2 px-3 rounded-1 fSize-2 text-dark"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fullName && <p className="text-danger fSize-1 fw-lighter">{errors.fullName}</p>}
        </div>

        {/* Phone Number */}
        <div className="inputBody mb-3">
          <label className="mb-1 fSize-2 fw-medium text-dark">Phone Number*</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            className="w-100 d-inline-block py-2 px-3 rounded-1 fSize-2 text-dark"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phoneNumber && <p className="text-danger fSize-1 fw-lighter">{errors.phoneNumber}</p>}
        </div>

        <div className="callMeBackBtn">
          <button
            type="submit"
            className="w-100 border-0 outline-none py-2 text-white rounded-1 fSize-4 fw-semibold"
          >
            CALL ME BACK
          </button>
        </div>
      </form>
    </div>
  );
}

export default CallUsForm;
