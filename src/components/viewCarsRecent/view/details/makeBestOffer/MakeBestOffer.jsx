"use client";

import React, { useMemo } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelectedCar } from "@/store/selectedCar";
import Banner from "../comps/Banner";

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
                <div className="chatHeader d-flex align-items-center gap-2 border-bottom py-3 ">
                  <div className="userProfile"></div>
                  <div className="userName">
                    <p className="m-0 fSize-2 fw-normal text-dark">Username</p>
                  </div>
                </div>
                <div className="offerGivenChat py-2 px-4 my-3 rounded-4">
                  <h6 className="text-center fSize-4 fw-bold text-black">
                    Offer Given
                  </h6>
                  <strong className="fSize-3 text-dark">Note:</strong>
                  <p className="fSize-2 fw-normal">
                    Lorem ipsum is a dummy or placeholder text commonly used in
                    graphic design,
                  </p>
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
                        <Form.Range className="rang_main"/>
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
