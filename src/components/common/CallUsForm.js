"use client";

import { useState } from "react";

function CallUsForm({ onOTPStateChange }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    otp: "",
  });
  const [errors, setErrors] = useState({});
  const [showOTP, setShowOTP] = useState(false);
  const [isOTPSent, setIsOTPSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleBlur = (e) => {
    if (!formData[e.target.name].trim()) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: `${e.target.name === "fullName" ? "Name" : e.target.name === "phoneNumber" ? "Phone Number" : "OTP"} is required`,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!showOTP) {
      // Initial form submission - validate name and phone
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

      // Show OTP form
      setShowOTP(true);
      setIsOTPSent(true);
      onOTPStateChange?.(true);
      console.log("OTP sent to", formData.phoneNumber);
    } else {
      // OTP verification
      if (!formData.otp.trim()) {
        formErrors.otp = "OTP is required";
      }

      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }

      // Verify OTP (you can add actual OTP verification logic here)
      console.log("OTP verified", formData.otp);
      alert("OTP verified successfully! We'll call you back soon.");
      
      // Reset form
      setFormData({ fullName: "", phoneNumber: "", otp: "" });
      setShowOTP(false);
      setIsOTPSent(false);
      setErrors({});
    }
  };

  const handleEditPhone = () => {
    setShowOTP(false);
    setIsOTPSent(false);
    setFormData({ ...formData, otp: "" });
    setErrors({});
    onOTPStateChange?.(false);
  };

  if (showOTP) {
    return (
      <div className="callFormMain">
        <div className="mb-3">
          <p className="fSize-3 fw-normal text-dark mb-2">
            Code sent to <strong>+91-{formData.phoneNumber}</strong>{" "}
            <button 
              type="button" 
              className="btn btn-link p-0 text-primary fSize-3"
              onClick={handleEditPhone}
            >
              Edit
            </button>
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="callBackForm">
          {/* OTP Input */}
          <div className="inputBody mb-3">
            <label className="mb-1 fSize-2 fw-medium text-dark">OTP</label>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              className="w-100 d-inline-block py-2 px-3 rounded-1 fSize-2 text-dark"
              value={formData.otp}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength="6"
            />
            {errors.otp && <p className="text-danger fSize-1 fw-lighter">{errors.otp}</p>}
          </div>

          <div className="callMeBackBtn">
            <button
              type="submit"
              className="w-100 border-0 outline-none py-2 text-white rounded-1 fSize-4 fw-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

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
