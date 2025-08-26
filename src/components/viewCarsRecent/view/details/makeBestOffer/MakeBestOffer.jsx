"use client";

import React, { useMemo } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelectedCar } from "@/store/selectedCar";
import Banner from "../comps/Banner";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function MakeBestOffer() {
  const { car } = useSelectedCar();

  // Refresh fallback
  let carData = car;
  if (!carData && typeof window !== "undefined") {
    try {
      const raw = sessionStorage.getItem("selectedCar");
      if (raw) carData = JSON.parse(raw);
    } catch {}
  }

  const {
    image,
    brand,
    modal: model,
    location,
    price,
    EMI: emi,
    charges,
  } = carData;

  return (
    <>
      <Banner />
      <section className=" ">
        <Container>
          <Row className="g-4 my-4 p-2 bg-white">
            <Col lg={7}>
              <div className="position-relative">
                <img
                  src={image}
                  alt={`${brand} ${model}`}
                  className="w-100 rounded object-fit-cover"
                  style={{ maxHeight: 400 }}
                />
              </div>
              <Col xs={12} className="mt-3">
                <div className="hdTile pb-2">
                  <h6 className="fSize-6 fw-medium">Car Info</h6>
                </div>
              </Col>
              {/* Car overview section  */}
              <Row className="carOverView m-0 p-3">
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/years.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Reg. year
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">
                        Apr 2015
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/fuel.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Fuel
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">
                        Petrol
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/kmdrive.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        KM driven
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">
                        40,780 km
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/manual.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Transmission
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">
                        Manual
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/engine.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Engine capacity
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">
                        1197cc
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/membership.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Ownership
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">1st</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/make-years.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Make year
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">
                        Apr 2015
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/key.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Spare key
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">No</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/reg-number.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Reg number
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">
                        DL3C**2432
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/insurance.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Insurance
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">
                        Need renewal
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="pb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="iconOverview">
                      <img
                        src="/assets/img/plan-from.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="">
                      <span className="text-white fSize-2 fw-medium m-0">
                        Insurance type
                      </span>
                      <p className="text-white fSize-4 fw-semibold m-0">
                        Plans from ₹3,796/y
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              {/* Car overview section  */}
            </Col>
            <Col lg={5}>
              <div className="ChatBoxMainParent pb-2 rounded-2 px-3">
                <div className="header__SectionTop border-bottom py-3 d-flex justify-content-between align-items-center">
                  <div className="chatHeader d-flex align-items-center gap-2">
                    <div className="userProfile"></div>
                    <div className="userName">
                      <p className="m-0 fSize-2 fw-normal text-dark">
                        Username
                      </p>
                    </div>
                  </div>
                  <div className="getCallBack d-flex gap-4 align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <div className="outerPart">
                        <div className="phoneIcon d-flex justify-content-center align-items-center">
                          <Link href="">
                            {" "}
                            <FontAwesomeIcon
                              icon={faPhone}
                              size="15"
                              className="text-white"
                            />
                          </Link>
                        </div>
                      </div>
                      <p className="m-0 fSize-2 fw-semibold">
                        <Link href="" className="text-dark">
                          Get call back
                        </Link>
                      </p>
                    </div>
                    <div className="bookBtn">
                      <button
                        type="btn"
                        className="bookHere text-white fSize-2 fw-semibold py-2 px-4 "
                      >
                        Book Know
                      </button>
                    </div>
                  </div>
                </div>
                <div className="offerGivenChat py-3 px-4 my-3 rounded-4">
                  <h6 className="text-center fSize-4 fw-bold text-black">
                    Offer Given
                  </h6>
                  <strong className="fSize-3 text-dark">Note:</strong>
                  <p className="fSize-2 fw-normal">
                    Lorem ipsum is a dummy or placeholder text commonly used in
                    graphic design,
                  </p>
                </div>
                <div className="">
                  <div className="offerGivenChat rejectionOffer py-3 px-4 my-3 rounded-4">
                    <div className="d-flex justify-content-between align-items-center pb-3">
                      <h6 className="fSize-4 fw-bold text-black">
                        Offer Given
                      </h6>
                      <Button
                        type="btn"
                        className="rejectionBtn border-0 outline-none rounded-pill fSize-3 fw-medium text-dark py-1"
                      >
                        Rejected
                      </Button>
                    </div>
                    <div className="d-flex gap-2 align-items-center pb-2">
                      <span className="fSize-3 fw-normal text-black">
                        Car Name:
                      </span>
                      <p className="m-0 fSize-4 fw-bold text-black">
                        2023 Mahindra XUV300
                      </p>
                    </div>
                    <strong className="fSize-3 text-dark">Note:</strong>
                    <p className="fSize-2 fw-normal">
                      Lorem ipsum is a dummy or placeholder text commonly used
                      in graphic design,
                    </p>
                    <div className="footerDetails d-flex align-items-center justify-content-between">
                      <div className="">
                        <div className="d-flex gap-2 align-items-center mb-1">
                          <span className="fSize-3 fw-normal validText">
                            Valid Until:
                          </span>
                          <p className="m-0 fSize-3 fw-bold text-black">
                            May 25, 2025
                          </p>
                        </div>
                        <div className="viewCarosaBisk pb-4">
                          <span className="text-white m-0 py-1 px-3 fSize-2 fw-normal">
                            CAROSA Partner
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <div className="d-flex gap-1 align-items-center justify-content-end">
                          {/* <img src=" alt="" /> */}
                          <Image
                            src="/images/price.png"
                            className=""
                            width={21}
                            height={21}
                          />
                          <div className="roadPrice">
                            <h6 className="m-0 fsSize-7-5 fw-semibold">
                              90,000,0
                            </h6>
                          </div>
                        </div>
                        <div className="dateFormate">
                          <span className="dateTime fSize-2 fw-normal">
                            12 July, 2025, 12:04 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="offerGivenChat rejectionOffer py-3 px-4 my-3 rounded-4">
                    <div className="d-flex justify-content-between align-items-center pb-3">
                      <h6 className="fSize-4 fw-bold text-black">
                        Given Offer by Seller
                      </h6>
                      <Button
                        type="btn"
                        className="waiting__response border-0 outline-none rounded-pill fSize-3 fw-medium text-dark py-1"
                      >
                        Waiting for Response
                      </Button>
                    </div>
                    <div className="d-flex gap-2 align-items-center pb-2">
                      <span className="fSize-3 fw-normal text-black">
                        Car Name:
                      </span>
                      <p className="m-0 fSize-4 fw-bold text-black">
                        2023 Mahindra XUV300
                      </p>
                    </div>
                    <strong className="fSize-3 text-dark">Note:</strong>
                    <p className="fSize-2 fw-normal">
                      Lorem ipsum is a dummy or placeholder text commonly used
                      in graphic design,
                    </p>
                    <div className="footerDetails">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="">
                          <div className="d-flex gap-2 align-items-center mb-1">
                            <span className="fSize-3 fw-normal validText">
                              Valid Until:
                            </span>
                            <p className="m-0 fSize-3 fw-bold text-black">
                              May 25, 2025
                            </p>
                          </div>
                          <div className="viewCarosaBisk pb-4">
                            <span className="text-white m-0 py-1 px-3 fSize-2 fw-normal">
                              CAROSA Partner
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="d-flex gap-1 align-items-center justify-content-end">
                            {/* <img src=" alt="" /> */}
                            <Image
                              src="/images/price.png"
                              width={21}
                              height={21}
                            />
                            <div className="roadPrice">
                              <h6 className="m-0 fsSize-7-5 fw-semibold">
                                90,000,0
                              </h6>
                            </div>
                          </div>
                          <div className="dateFormate">
                            <span className="dateTime fSize-2 fw-normal">
                              12 July, 2025, 12:04 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="optionsBtn d-flex justify-content-between align-items-center">
                        <div className="acceptBtn">
                          <Button type="btn" className="accepted py-2 px-4 border-0 outline-none fSize-3 fw-semibold text-white">Accept Offer</Button>
                        </div>
                        <div className="payingBtn">
                          <Button type="btn" className="pay py-2 px-4 border-0 outline-none fSize-3 fw-semibold text-white">Pay Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Row className="align-items-center">
                  <Col lg={9}>
                    <div className="priceRang">
                      <div className="rangTitle d-flex justify-content-between align-items-center">
                        <Form.Label className="fSize-3 fw-semibold lable">
                          Range
                        </Form.Label>
                        <span className="fSize-3 fw-semibold">₹ 7,14,400</span>
                      </div>
                      <div className="multiRang position-relative">
                        <Form.Range className="rang_main" />
                      </div>

                      <div className="rangTitleBt d-flex justify-content-between align-items-center">
                        <Form.Label className="fSize-2 fw-semibold lable">
                          ₹ 1,00,000
                        </Form.Label>
                        <span className="fSize-2 fw-semibold">₹ 8,93,000</span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="bookBtn">
                      <button
                        type="btn"
                        className="bookHere text-white fSize-2 fw-semibold py-3 px-3 rounded-pill"
                      >
                        Book Know
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
