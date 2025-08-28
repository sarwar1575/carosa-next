"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import brands from "../../../data/Brands.json";
import model from "../../../data/Model.json"

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [regNo, setRegNo] = useState("");
  const [error, setError] = useState("");

  // NOTE: Step 3 snippet me details.* use hua tha — isliye yahan minimal state add kar diya
  // (agar future me Step 2 ke inputs bind karne ho to isi object me set kar dena)
  const [details] = useState({
    make: "",
    model: "",
    year: "",
    fuel: "",
    transmission: "",
    km: "",
  });

  // Optional: basic pattern (e.g., "DL 01 AB 1234" variants)
  const regPattern = /^[A-Z]{2}\s?\d{1,2}\s?[A-Z]{1,2}\s?\d{1,4}[A-Z]{0,2}$/i;

  const handleNext = () => {
    if (!regNo.trim()) {
      setError("Please enter a registration number.");
      return;
    }
    if (!regPattern.test(regNo.trim())) {
      setError(
        "Please enter a valid registration number (e.g., DL 01 AB 1234)."
      );
      return;
    }
    setError("");
    setStep(2);
  };

  const handleBack = () => setStep(1);

  // ✅ NEW: Step 3 helpers
  const handleBackToStep2 = () => setStep(2);
  const handleSubmitStep3 = (e) => {
    e.preventDefault();
    // yahan API submit ya navigation kar sakte ho
    alert(
      "Submitted! (Demo)\n\n" + JSON.stringify({ regNo, ...details }, null, 2)
    );
  };

  return (
    <>
      <section
        className="registrationFormMain"
        style={{ paddingTop: "130px", paddingBottom: "130px" }}
      >
        <Container fluid>
          <Row className="">
            <Col xs={12} className="mb-4">
              <Row className="justify-content-center">
                <Col xs={4}>
                  <div className="carBasicDetails position-relative">
                    <h6 className="bg-white py-3 text-center fw-semibold fSize-6">
                      Vehicle Basic Details
                    </h6>
                    <div className="quadrat"></div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xs={12}>
              <Row className="justify-content-center">
                <Col xs={5}>
                  <div className="registrationFormBody bg-white p-3 border">
                    <div className="me__tx d-flex justify-content-end pb-3">
                      <Link href="" className="ma_entr fSize-4 fw-medium">
                        Manual Entry
                      </Link>
                    </div>

                    {/* ---------- STEP 1: Registration Number ---------- */}
                    {step === 1 && (
                      <>
                        <div className="d-flex justify-content-center">
                          <p className="fSize-4 fw-semibold text-dark">
                            Enter Registration No.
                          </p>
                        </div>

                        <form
                          className="registraionMainFillForm"
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleNext();
                          }}
                        >
                          <div className="plate-wrap mb-2 position-relative d-flex align-items-center bg-white rounded-2">
                            {/* Left emblem (round flag + IND) */}
                            <div
                              className="plate-emblem d-flex align-items-center flex-column gap-1"
                              aria-hidden
                            >
                              <Image
                                src="/assets/img/indiachak.png"
                                height={18}
                                width={18}
                                alt="Ashoka Chakra"
                                className="object-fit-cover"
                              />
                              <span className="ind fSize-1 fw-bold text-black">
                                IND
                              </span>
                            </div>

                            <input
                              type="text"
                              className="plate-input flex-1 border-none outline-none bg-transparent"
                              placeholder="DL 01 AB 1234"
                              aria-label="Vehicle Registration Number"
                              value={regNo}
                              onChange={(e) =>
                                setRegNo(e.target.value.toUpperCase())
                              }
                            />
                          </div>

                          {error && (
                            <div className="pb-2">
                              <small className="text-danger fSize-2">
                                {error}
                              </small>
                            </div>
                          )}

                          <div className="hint pb-4">
                            <i className="">ℹ</i>
                            <span>
                              {" "}
                              (auto-fill if RTO integration available)
                            </span>
                          </div>

                          <div className="d-flex align-items-center justify-content-end gap-4">
                            <div className="priveBtn">
                              <button
                                type="button"
                                className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
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
                    )}

                    {/* ---------- STEP 2: Example Details Form (same card) ---------- */}
                    {step === 2 && (
                      <>
                        <form
                          className="registraionMainFillForm"
                          onSubmit={(e) => {
                            e.preventDefault();
                            // ✅ JUST THIS makes Step-3 appear
                            setStep(3);
                          }}
                        >
                          <div className="inputBody mb-3">
                            <label className="fSize-3 fw-medium mb-1">
                              Make Year
                            </label>
                            <Form.Select
                              aria-label="Default select example"
                              className="selector py-2 px-3 rounded-1 fSize-2 w-100"
                            >
                              <option>Select Year</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </div>

                          <div className="brandsMain d-flex align-items-center justify-content-between pb-3">
                            <div className="">
                              <h6 className="fSize-8-5 fw-semibold">Brand</h6>
                            </div>
                            <div className="searchBrand position-relative">
                              <input
                                placeholder="Search by Brand"
                                className="rounded-pill border-0 py-1 px-5"
                              />
                              <Image
                                src="/images/Search.png"
                                className="brandSearchIcon"
                                width={12}
                                height={12}
                                alt="search"
                              />
                            </div>
                          </div>

                          <Row className="scollerClass">
                            {brands.map((items, i) => (
                              <Col
                                xl={3}
                                key={i}
                                className="position-relative mb-3"
                              >
                                <div className="select_carbrands bg-white rounded-3 d-flex flex-column align-items-center justify-content-center">
                                  <img src={items.image} alt="" />
                                  <p className="fSize-3 fw-medium text-dark">
                                    {items.brandName}
                                  </p>
                                </div>
                              </Col>
                            ))}
                          </Row>

                          <div className="d-flex align-items-center justify-content-end gap-4 mt-4">
                            <div className="priveBtn">
                              <button
                                type="button"
                                className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
                                onClick={handleBack}
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
                    )}

                    {/* ===================== STEP 3 (Review) ===================== */}
                    {step === 3 && (
                      <>
                        <form
                          className="registraionMainFillForm"
                          onSubmit={handleSubmitStep3}
                        >
                          <div className="brandsMain d-flex align-items-center justify-content-between pb-3">
                            <div className="">
                              <h6 className="fSize-8-5 fw-semibold">Model</h6>
                            </div>
                            <div className="searchBrand position-relative">
                              <input
                                placeholder="Search by Model"
                                className="rounded-pill border-0 py-1 px-5"
                              />
                              <Image
                                src="/images/Search.png"
                                className="brandSearchIcon"
                                width={12}
                                height={12}
                                alt="search"
                              />
                            </div>
                          </div>
                          <Row className="scollerClass">
                            {model.map((items, i) => (
                              <Col
                                xl={3}
                                key={i}
                                className="position-relative mb-3"
                              >
                                <div className="select_carmodel bg-white rounded-3 d-flex flex-column align-items-center justify-content-center p-2">
                                  <img src={items.image} alt="" />
                                  <p className="fSize-3 fw-medium text-dark pt-3">
                                    {items.brandName}
                                  </p>
                                </div>
                              </Col>
                            ))}
                          </Row>
                          <div className="d-flex align-items-center justify-content-end gap-4">
                            {/* Preview == Back to Step 2 */}
                            <div className="priveBtn">
                              <button
                                type="button"
                                className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1"
                                onClick={handleBackToStep2}
                              >
                                Preview
                              </button>
                            </div>

                            <div className="bookBtn nextBtn">
                              <button
                                type="submit"
                                className="bookHere text-white fSize-5 fw-semibold py-2 px-5 rounded-1"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RegistrationForm;
