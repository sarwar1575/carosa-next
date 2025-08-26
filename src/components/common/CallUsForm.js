"use client";

import { useState } from "react";

function CallUsForm() {
    const [error, setError]= useState({})
  return (
    <>
      <div className="callFormMain">
        <form className="callBackForm">
            <div className="inputBody mb-2">
                <label htmlFor="" className="mb-1 fSize-2 fw-medium text-dark">Full Name*</label>
                <input type="text" placeholder="Enter Full Name" className="w-100 d-inline-block py-2 px-3 rounded-1"/>
            </div>
              <div className="inputBody mb-3">
                <label htmlFor="" className="mb-1 fSize-2 fw-medium text-dark">Phone Number*</label>
                <input type="text" placeholder="Enter Phone Number" className="w-100 d-inline-block py-2 px-3 rounded-1"/>
            </div>
            <div className="callMeBackBtn">
                <button type="btn" className="w-100 border-0 outline-none py-2 text-white rounded-1 fSize-4 fw-semibold">CALL ME BACK</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default CallUsForm;
