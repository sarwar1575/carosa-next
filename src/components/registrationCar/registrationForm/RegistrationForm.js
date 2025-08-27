"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

function RegistrationForm() {
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
                    <div class="d-flex justify-content-center">
                      <p class="fSize-4 fw-semibold text-dark">
                        Enter Registration No.
                      </p>
                    </div>
                    <form className="registraionMainFillForm">
                      <div className="plate-wrap mb-4 position-relative d-flex align-items-center bg-white rounded-2">
                        {/* Left emblem (round flag + IND) */}
                        <div
                          className="plate-emblem d-flex align-items-center flex-column gap-1"
                          aria-hidden
                        >
                          {/* <svg viewBox="0 0 32 32" className="flag">
                            <defs>
                              <clipPath id="clip">
                                <circle cx="16" cy="16" r="14" />
                              </clipPath>
                            </defs>
                            <g clipPath="url(#clip)">
                              <rect width="32" height="32" fill="#128807" />
                              <rect
                                y="10.6"
                                width="32"
                                height="10.8"
                                fill="#ffffff"
                              />
                              <rect
                                y="21.4"
                                width="32"
                                height="10.6"
                                fill="#ff9933"
                              />
                            </g>
                            <circle cx="16" cy="16" r="3" fill="#000080" />
                          </svg> */}
                          <Image src="/assets/img/indiachak.png" height="18" width="18" className="object-fit-cover"/>
                          <span className="ind fSize-1 fw-bold text-black">
                            IND
                          </span>
                        </div>

                        <input
                          type="text"
                          className="plate-input flex-1 border-none outline-none bg-transparent"
                          placeholder="DL 01 AB12XX"
                          aria-label="Vehicle Registration Number"
                        />
                      </div>

                      <div className="hint pb-4">
                        <i className="">ℹ</i>
                        <span>(auto-fill if RTO integration available)</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-end gap-4">
                        <div className="priveBtn">
                          <button type="btn" className="fSize-5 fw-semibold py-2 px-5 outline-none bg-transparent rounded-1">Preview</button>
                        </div>
                        <div class="bookBtn nextBtn">
                          <button
                            type="btn"
                            class="bookHere text-white fSize-5 fw-semibold py-2 px-5 rounded-1"
                          >
                            Next <FontAwesomeIcon icon={faArrowRight} className="right_nx-ic fSize-2"/>
                          </button>
                        </div>
                      </div>
                    </form>
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
