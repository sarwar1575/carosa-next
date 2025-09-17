// File: src/components/registrationCar/registrationForm/stepForm/OwnershipForm.jsx
"use client";

import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";

function OwnershipForm({ backTo4, goStep6 }) {
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [selectedTransmission, setSelectedTransmission] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [selectedSpareKey, setSelectedSpareKey] = useState(null);
  const [selectedKm, setSelectedKm] = useState(null);

  return (
    <>
      <form className="registraionMainFillForm" onSubmit={goStep6}>
        <div className="owner__list border-bottom pb-3 mb-4">
          <label className="fSize-4 fw-semibold text-black pb-2">Owner</label>
          <div className="d-flex align-items-center gap-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className={`owners rounded-circle border d-flex justify-content-center align-items-center flex-column ${
                  selectedOwner === num ? "activeSelect" : ""
                }`}
                onClick={() => setSelectedOwner(num)}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
                <span className="fSize-1 fw-semibold">{num}st</span>
              </div>
            ))}
          </div>
        </div>

        <div className="owner__list border-bottom pb-3 mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">Owner</label>
          <Row>
            <Col lg={6}>
              <div className="carType">
                <div
                  className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                    selectedTransmission === "Manual" ? "activeSelect" : ""
                  }`}
                  onClick={() => setSelectedTransmission("Manual")}
                  style={{ cursor: "pointer" }}
                >
                  Manual
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="carType">
                <div
                  className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                    selectedTransmission === "Automatic" ? "activeSelect" : ""
                  }`}
                  onClick={() => setSelectedTransmission("Automatic")}
                  style={{ cursor: "pointer" }}
                >
                  Automatic
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="owner__list border-bottom pb-3 mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Fuel Type
          </label>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-2 g-lg-3">
            {["Petrol", "Diesel", "CNG", "Electric", "Hybrid"].map((fuel) => (
              <div className="col" key={fuel}>
                <div className="carType">
                  <div
                    className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                      selectedFuel === fuel ? "activeSelect" : ""
                    }`}
                    onClick={() => setSelectedFuel(fuel)}
                    style={{ cursor: "pointer" }}
                  >
                    {fuel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="owner__list border-bottom pb-3 mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Kilometers Driven
          </label>
          <Row>
            <Col lg={6}>
              <div className="carType">
                <div
                  className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                    selectedKm === "manual" ? "activeSelect" : ""
                  }`}
                  onClick={() => setSelectedKm("manual")}
                  style={{ cursor: "pointer" }}
                >
                  Enter Manual
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="owner__list border-bottom pb-3 mb-4">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Spare Key
          </label>
          <div className="d-flex align-items-center gap-3">
            {["Yes", "No"].map((option) => (
              <div
                key={option}
                className={`owners rounded-circle border d-flex justify-content-center align-items-center flex-column ${
                  selectedSpareKey === option ? "activeSelect" : ""
                }`}
                onClick={() => setSelectedSpareKey(option)}
                style={{ cursor: "pointer" }}
              >
                <span className="fSize-1 fw-semibold">{option}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-end gap-4">
          <div className="priveBtn">
            <button
              type="button"
              className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
              onClick={backTo4}
            >
              Preview
            </button>
          </div>

          <div className="bookBtn nextBtn">
            <button
              type="submit"
              className="bookHere text-white fSize-5 fw-semibold py-2 px-5 rounded-1"
            >
              Next{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="right_nx-ic fSize-2"
              />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default OwnershipForm;
