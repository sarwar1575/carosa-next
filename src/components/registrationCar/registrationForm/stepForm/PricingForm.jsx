import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function PricingForm({ backTo8 }) {
  const [manual, setManual] = useState(null);
  return (
    <form className="registraionMainFillForm">
      <div className="owner__list pb-0 mb-4">
        <Row>
          <Col lg={12} className="pb-4">
            <div className="carType">
               <p className="mt-2 fSize-4 text-dark gap-2">
          <strong className="fw-semibold text-dark">Listing Price</strong> <span className="fst-italic"> (Price you want to display publicly)</span>
        </p>
              <div
                className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                  manual === "Touchscreen" ? "activeSelect" : ""
                }`}
                onClick={() => setManual("Touchscreen")}
                style={{ cursor: "pointer" }}
              >
                Enter Manual
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="carType">
                <p className="mt-2 fSize-4 text-dark gap-2">
          <strong className="fw-semibold text-dark">Listing Price</strong> <span className="fst-italic fw-light"> (Price you want to display publicly)</span>
        </p>
              <div
                className={`button__selects text-center w-100 fSize-2 fw-semibold py-3 ${
                  manual === "CruiseControl" ? "activeSelect" : ""
                }`}
                onClick={() => setManual("CruiseControl")}
                style={{ cursor: "pointer" }}
              >
               Enter Manual
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
            onClick={backTo8}
          >
            Preview
          </button>
        </div>

        <div className="bookBtn nextBtn">
          <button
            type="submit"
            className="bookHere text-white fSize-5 fw-semibold py-2 px-5 rounded-1"
          >
            Finish{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="right_nx-ic fSize-2"
            />
          </button>
        </div>
      </div>
    </form>
  );
}

export default PricingForm;
