import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function AdditionalFeatures({ backTo7, goStep9 }) {
  const [sunroof, setSunroof] = useState(null);
  const [controls, setControls] = useState(null);
  return (
    <>
      <form className="registraionMainFillForm" onSubmit={goStep9}>
        <div className="owner__list pb-0 mb-4">
          <Row>
            <Col lg={6} className="mb-lg-0 mb-2">
              <div className="carType">
                {/* <label className="fSize-4 fw-semibold text-black pb-2">
                  Warranty Type
                </label> */}
                <div
                  className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                    sunroof === "Sunroof" ? "activeSelect" : ""
                  }`}
                  onClick={() => setSunroof("Sunroof")}
                  style={{ cursor: "pointer" }}
                >
                  {/* <input type="checkbox" className=""/> */}
                  Sunroof
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-lg-0 mb-2">
              <div className="carType">
                {/* <label className="fSize-4 fw-semibold text-black pb-2">
                  Warranty Type
                </label> */}
                <div
                  className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                    sunroof === "AlloyWheels" ? "activeSelect" : ""
                  }`}
                  onClick={() => setSunroof("AlloyWheels")}
                  style={{ cursor: "pointer" }}
                >
                  Alloy Wheels
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="owner__list pb-0 mb-4">
          <Row>
            <Col lg={6} className="mb-lg-0 mb-2">
              <div className="carType">
                {/* <label className="fSize-4 fw-semibold text-black pb-2">
                  Warranty Type
                </label> */}
                <div
                  className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                    controls === "Touchscreen" ? "activeSelect" : ""
                  }`}
                  onClick={() => setControls("Touchscreen")}
                  style={{ cursor: "pointer" }}
                >
                  Touchscreen
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-lg-0 mb-2">
              <div className="carType">
                {/* <label className="fSize-4 fw-semibold text-black pb-2">
                  Warranty Type
                </label> */}
                <div
                  className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                    controls === "CruiseControl" ? "activeSelect" : ""
                  }`}
                  onClick={() => setControls("CruiseControl")}
                  style={{ cursor: "pointer" }}
                >
                  Cruise Control
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex align-items-center justify-content-end gap-4">
          <div className="priveBtn">
            <button
              type="button"
              className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
              onClick={backTo7}
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

export default AdditionalFeatures;
