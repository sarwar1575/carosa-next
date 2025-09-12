// File: src/components/registrationCar/registrationForm/stepForm/OwnershipForm.jsx
"use client";

import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";

function OwnershipForm({ backTo4, goStep6 }) {
  return (
    <>
      <form className="registraionMainFillForm" onSubmit={goStep6}>
        <div className="owner__list border-bottom pb-3 mb-4">
          <label className="fSize-4 fw-semibold text-black pb-2">Owner</label>
          <div className="d-flex align-items-center gap-3">
            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
              <span className="fSize-1 fw-semibold">1st</span>
            </div>
            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
              <span className="fSize-1 fw-semibold">2st</span>
            </div>
            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
              <span className="fSize-1 fw-semibold">3st</span>
            </div>
            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
              <span className="fSize-1 fw-semibold">4st</span>
            </div>
            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
              <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" />
              <span className="fSize-1 fw-semibold">5st</span>
            </div>
          </div>
        </div>
        <div className="owner__list border-bottom pb-3 mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">Owner</label>
          <Row>
            <Col lg={6}>
              <div className="carType">
                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">
                  Manual
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="carType">
                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">
                  Automatic
                </button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="owner__list border-bottom pb-3 mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Fuel Type
          </label>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-2 g-lg-3">
            <div className="col">
              <div className="carType">
                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">
                  Petrol
                </button>
              </div>
            </div>
            <div className="col">
              <div className="carType">
                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">
                  Diesel
                </button>
              </div>
            </div>
            <div className="col">
              <div className="carType">
                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">
                  CNG
                </button>
              </div>
            </div>
            <div className="col">
              <div className="carType">
                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">
                  Electric
                </button>
              </div>
            </div>
            <div className="col">
              <div className="carType">
                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">
                  Hybrid
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="owner__list border-bottom pb-3 mb-3">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Kilometers Driven
          </label>
          <Row>
            <Col lg={6}>
              <div className="carType">
                <button type="btn" className="w-100 fSize-2 fw-semibold py-2">
                  Enter Manual
                </button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="owner__list border-bottom pb-3 mb-4">
          <label className="fSize-4 fw-semibold text-black pb-2">
            Spare Key
          </label>
          <div className="d-flex align-items-center gap-3">
            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
              {/* <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" /> */}
              <span className="fSize-1 fw-semibold">Yes</span>
            </div>
            <div className="owners rounded-circle border d-flex justify-content-center align-items-center flex-column">
              {/* <FontAwesomeIcon icon={faUser} className="fSize-1 my-1" /> */}
              <span className="fSize-1 fw-semibold">No</span>
            </div>
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
