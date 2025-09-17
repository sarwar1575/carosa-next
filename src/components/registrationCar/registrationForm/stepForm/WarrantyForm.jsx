import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function WarrantyForm({ goStep7, backTo5 }) {
  const [selectedSpareKey, setSelectedSpareKey] = useState(null);
  const [selectedTransmission, setSelectedTransmission] = useState(null);
  const [warrantyDate, setWarrantyDate] = useState("");
  return (
    <>
      <form className="registraionMainFillForm" onSubmit={goStep7}>
        <div className="owner__list pb-0 mb-4 text-center">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Warranty
          </label>
          <div className="d-flex align-items-center justify-content-center gap-3">
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
        <div className="owner__list pb-0 mb-4">
          <Row>
            <Col lg={6}>
              <div className="carType">
                <label className="fSize-4 fw-semibold text-black pb-2">
                  Warranty Type
                </label>
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
                <label className="fSize-4 fw-semibold text-black pb-2">
                  Warranty Expiry Date
                </label>
                <input
                  type="date"
                  className="button__selects w-100 px-3 fSize-2 fw-semibold py-3"
                  value={warrantyDate}
                  onChange={(e) => setWarrantyDate(e.target.value)}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="owner__list pb-0 mb-4 text-center">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Warranty
          </label>
          <div className="d-flex align-items-center justify-content-center gap-3">
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
        <div className="owner__list pb-3 mb-4">
          <Row>
            <Col lg={6}>
              <div className="carType">
                <label className="fSize-4 fw-semibold text-black pb-2">
                  Warranty Type
                </label>
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
                <label className="fSize-4 fw-semibold text-black pb-2">
                  Warranty Expiry Date
                </label>
                <input
                  type="date"
                  className="button__selects w-100 px-3 fSize-2 fw-semibold py-3"
                  value={warrantyDate}
                  onChange={(e) => setWarrantyDate(e.target.value)}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex align-items-center justify-content-end gap-4">
          <div className="priveBtn">
            <button
              type="button"
              className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
              onClick={backTo5}
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

export default WarrantyForm;
