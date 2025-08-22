"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import inspectionData from "../../../../data/CarInspection.json";
import higlightsCars from "../../../../data/HighlightsCars.json";
import {
  faChevronRight,
  faIndianRupeeSign,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Form, Row } from "react-bootstrap";
import Banner from "./comps/Banner";
import AccordionList from "./comps/AccordionList";
import EMICalculator from "./comps/EMICalculator";
import CarosaKaBharosa from "./comps/CarosaKaBharosa";
import ExploreOurFullCollection from "@/components/home/ExploreOurFullCollection";
import Stories from "@/components/home/Stories";
import AskAssistance from "@/components/home/AskAssistance";
import MoreExplore from "./comps/MoreExplore";
import { useSelectedCar } from "@/store/selectedCar";

export default function RecentCarDetails({ car, carIndex }) {
  // if (!car) {
  //   return (
  //     <section className="container py-5">
  //       <h2 className="text-white">No car selected</h2>
  //       <p className="text-white-50">Open this page from the listing.</p>
  //     </section>
  //   );
  // }
const { setCar } = useSelectedCar();

const handlePrepareOfferData = () => {
  setCar(car);
  if (typeof window !== "undefined") {
    try {
      sessionStorage.setItem("selectedCar", JSON.stringify(car));
    } catch {}
  }
};
  // JSON keys ko yahin map kar lo (aapke list component ke hisaab se)
  const image = car.image;
  const brand = car.brand;
  const model = car.modal; // agar JSON me "model" hai to yahan car.model kar dena
  const location = car.location;
  const usageMiles = car.use;
  const vehicleType = car.vehicle;
  const price = car.price;
  const charges = car.charges;
  const emi = car.EMI;
  const platform = car.platform;

  return (
    <>
      <Banner />
      <section className="padding-Y-X">
        <Container fluid>
          <Row>
            <Col lg={2}>
              <div
                className="tabBtnsList d-flex flex-column gap-2 position-sticky"
                style={{ top: "190px" }}
              >
                <Link
                  href=""
                  className="tabBtn fSize-3 fw-medium py-3 bg-white w-100 d-inline-block text-center rounded-3 border"
                >
                  Overview
                </Link>
                <Link
                  href=""
                  className="tabBtn fSize-3 fw-medium py-3 bg-white w-100 d-inline-block text-center rounded-3 border"
                >
                  Car inspection
                </Link>
                <Link
                  href=""
                  className="tabBtn fSize-3 fw-medium py-3 bg-white w-100 d-inline-block text-center rounded-3 border"
                >
                  Features and specs
                </Link>
                <Link
                  href=""
                  className="tabBtn fSize-3 fw-medium py-3 bg-white w-100 d-inline-block text-center rounded-3 border"
                >
                  Videos
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="position-relative">
                <img
                  src={image}
                  alt={`${brand} ${model}`}
                  className="w-100 rounded object-fit-cover"
                  style={{ maxHeight: 487 }}
                />
              </div>

              {/* Car overview section  */}

              <div className="carOverView rounded-2 mt-4 p-3">
                <div className="hdTile pb-2">
                  <h6 className="text-white fSize-6 fw-medium">Car Overview</h6>
                </div>
                <div className="overviewcarplaneListCard d-flex align-items-center border-bottom pb-3">
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
                </div>
                <div className="overviewcarplaneListCard d-flex align-items-center border-bottom pb-3">
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
                </div>
                <div className="overviewcarplaneListCard d-flex align-items-center border-bottom pb-3">
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
                </div>
                <div className="overviewcarplaneListCard d-flex align-items-center">
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
                </div>
              </div>
              {/* Car overview section  */}

              {/* inspections car sections  */}
              <div className="inspectionSections mt-4 p-3">
                <div className="hdTile pb-2">
                  <h6 className="text-dark fSize-6 fw-medium">
                    Car inspection report
                  </h6>
                </div>
                <Row>
                  {inspectionData.map((items, index) => (
                    <Col xl={4} md={6} xs={12} key={index} className="pb-3">
                      <div className="inspectionCardBox p-2">
                        <div className="hd-jjpst d-flex gap-2 align-items-center">
                          <img
                            src="/assets/img/breakHart.png"
                            alt=""
                            className=""
                            width={15}
                          />
                          <Link
                            href=""
                            className="d-flex align-items-center gap-2"
                          >
                            <h6 className="fSize-2 fw-medium m-0">
                              {items.vehicleHealth}
                            </h6>{" "}
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="inico"
                            />{" "}
                          </Link>
                        </div>
                        <span className="pointsInspection fSize-2 fw-semibold">
                          {items.points} points inspected.
                        </span>
                        <div className="pt-2">
                          <div className="carsInspectionsReports d-flex align-items-center gap-2 mb-3">
                            <img
                              src="/assets/img/accidentHistoryIcon.png"
                              alt=""
                              className="object-fit-cover"
                              width={30}
                              height={29}
                            />
                            <p className="m-0 fSize-2 fw-semibold">
                              {items.accidentVehicle} accident history
                            </p>
                          </div>
                          <div className="carsInspectionsReports d-flex align-items-center gap-2 mb-3">
                            <img
                              src="/assets/img/accidentHistoryIcon.png"
                              alt=""
                              className="object-fit-cover"
                              width={30}
                              height={29}
                            />
                            <p className="m-0 fSize-2 fw-semibold">
                              {items.accidentVehicle} accident history
                            </p>
                          </div>
                          <div className="carsInspectionsReports d-flex align-items-center gap-2 mb-3">
                            <img
                              src="/assets/img/accidentHistoryIcon.png"
                              alt=""
                              className="object-fit-cover"
                              width={30}
                              height={29}
                            />
                            <p className="m-0 fSize-2 fw-semibold">
                              {items.accidentVehicle} accident history
                            </p>
                          </div>
                          <div className="carsInspectionsReports d-flex align-items-center gap-2 mb-3">
                            <img
                              src="/assets/img/accidentHistoryIcon.png"
                              alt=""
                              className="object-fit-cover"
                              width={30}
                              height={29}
                            />
                            <p className="m-0 fSize-2 fw-semibold">
                              {items.accidentVehicle} accident history
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row className="justify-content-between">
                  <Col xl={7}>
                    <div className="qualityCheck p-2 border rounded-pill d-flex align-items-center gap-2">
                      <img
                        src="/assets/img/ckeckquality.png"
                        alt=""
                        width={15}
                      />{" "}
                      <p className="fSize-2 m-0 fw-semibold">
                        <span className="fw-bold">CAROSA</span> inspected with
                        140-quality checks.
                      </p>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div className="viewInspectionReportBtn d-flex justify-content-end">
                      <Link
                        href=""
                        className="in-peton-btn fSize-2 fw-medium text-white py-2 px-4 rounded-2"
                      >
                        View inspection report
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* inspections car sections  */}

              {/* Highlights of This Car sections  */}
              <div className="higlightsCars rounded-2 mt-4 p-3">
                <div className="hdTile pb-3">
                  <h6 className="text-white fSize-6 fw-medium">
                    Highlights of This Car
                  </h6>
                </div>
                <Row>
                  {higlightsCars.map((items, index) => (
                    <Col xl={4} key={index.id || index} className="pb-4">
                      <div className="higlightsCarsCard d-flex justify-content-center align-items-center flex-column">
                        <div className="higlightImg rounded-circle bg-white d-flex justify-content-center align-items-center mb-2">
                          <img
                            src="/assets/img/repaintedcar.png"
                            alt=""
                            width={14}
                          />
                        </div>
                        <h6 className="text-white fSize-5 fw-semibold">
                          {items.heading}
                        </h6>
                        <p className="text-white text-center fSize-3 fw-normal">
                          {items.title}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              {/* Highlights of This Car sections  */}

              {/* Features and specs section  */}
              <div className="featuresSections rounded-2 mt-4 p-3">
                <div className="hdTile pb-3">
                  <h6 className="text-white fSize-6 fw-medium">
                    Highlights of This Car
                  </h6>
                </div>
                <Row className="justify-content-center">
                  <Col xl={11}>
                    <div className="featureInputField position-relative">
                      <Form.Group className="" controlId="">
                        <Form.Control
                          className="featureFill"
                          type="email"
                          placeholder="Search for features or specs"
                        />
                      </Form.Group>
                      <div className="searchBtn">
                        <button
                          type="btn"
                          className="border-0 outline-none bg-white fSize-3 fw-medium"
                        >
                          <img
                            src="/images/Search.png"
                            className="me-2"
                            alt=""
                            width={12}
                          />{" "}
                          Search
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="pt-3">
                  <Col xl={3}>
                    <div className="featuresLiks d-flex flex-column">
                      <Link
                        href=""
                        className="mb-3 pb-1 features fSize-4 fw-medium"
                      >
                        Features
                      </Link>
                      <Link
                        href=""
                        className="specifications pb-1 fSize-4 fw-medium text-white"
                      >
                        Specifications
                      </Link>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div>
                      <div className="d-flex align-items-center gap-2 pb-3">
                        <img
                          src="/assets/img/steering.png"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="m-0 text-white fSize-3 fw-semibold text-wrap overflow-visible text-overflow-unset">
                          Steering Mounted Controls
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 pb-3">
                        <img
                          src="/assets/img/airbag.png"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="m-0 text-white fSize-3 fw-semibold text-wrap overflow-visible text-overflow-unset">
                          Airbags
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 pb-3">
                        <img
                          src="/assets/img/ebd.png"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="m-0 text-white fSize-3 fw-semibold text-wrap overflow-visible text-overflow-unset">
                          EBD - Electronic Brakeforce Distribution
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 pb-3">
                        <img
                          src="/assets/img/central.png"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="m-0 text-white fSize-3 fw-semibold text-wrap overflow-visible text-overflow-unset">
                          Central Locking
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div>
                      <div className="d-flex align-items-center gap-2 pb-3">
                        <img
                          src="/assets/img/bluetooth.png"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="m-0 text-white fSize-3 fw-semibold text-wrap overflow-visible text-overflow-unset">
                          Bluetooth Compatibility
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 pb-3">
                        <img
                          src="/assets/img/abs.png"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="m-0 text-white fSize-3 fw-semibold text-wrap overflow-visible text-overflow-unset">
                          ABS - Anti-lock Braking System
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 pb-3">
                        <img
                          src="/assets/img/airconditions.png"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="m-0 text-white fSize-3 fw-semibold text-wrap overflow-visible text-overflow-unset">
                          Air Conditioner
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2 pb-3">
                        <img
                          src="/assets/img/rearDefoger.png"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <p className="m-0 text-white fSize-3 fw-semibold text-wrap overflow-visible text-overflow-unset">
                          Rear Defogger
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xl={8}>
                    <p className="m-0 fSize-5 fw-normal text-white text-wrap overflow-hedden text-overflow-unset">
                      Features and specifications bring superior driving
                      experience and comfort.
                    </p>
                  </Col>
                  <Col xl={4}>
                    <div className="viewInspectionReportBtn d-flex justify-content-end">
                      <Link
                        href=""
                        className="in-peton-btn fSize-2 fw-medium text-white py-2 px-5 rounded-2"
                      >
                        View all
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* Features and specs section  */}

              {/* Accordion section  */}
              <AccordionList />
              {/* Accordion section  */}

              {/* Carosa Bharosa  */}
              <CarosaKaBharosa />
              {/* Carosa Bharosa  */}

              {/* EMI Calculator  */}
              {/* <EMICalculator /> */}
              {/* EMI Calculator  */}
            </Col>
            <Col lg={4} className="position-sticky" style={{ top: "190px" }}>
              <div className="carDetailsMainParent p-3 rounded-3 bg-white position-relative">
                <h2 className=" fw-bold mb-1">{brand}</h2>
                <p className="fSize-3 fw-normal mb-3">{model}</p>

                <p className=" fSize-3">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ width: 14, height: 14 }}
                  />{" "}
                  {location}
                </p>
                <div className="aboutCar d-flex gap-1 align-items-baseline mb-4">
                  <div className="km">
                    <Link
                      href=""
                      className="aboutCarTab py-1 px-3 rounded-4 fSize-3 fw-normal"
                    >
                      4,780 km
                    </Link>
                  </div>
                  <div className="owner">
                    <Link
                      href=""
                      className="aboutCarTab py-1 px-3 rounded-4 fSize-3 fw-normal"
                    >
                      4,780 km
                    </Link>
                  </div>
                  <div className="petrol">
                    <Link
                      href=""
                      className="aboutCarTab py-1 px-3 rounded-4 fSize-3 fw-normal"
                    >
                      4,780 km
                    </Link>
                  </div>
                  <div className="automatic">
                    <Link
                      href=""
                      className="aboutCarTab py-1 px-3 rounded-4 fSize-3 fw-normal"
                    >
                      4,780 km
                    </Link>
                  </div>
                </div>
                {platform && (
                  <div className="viewCarosaBisk border-bottom pb-4">
                    <span className="text-white m-0 py-1 px-3 fSize-2 fw-normal">
                      {platform}
                    </span>
                  </div>
                )}
                <div className="deliveryLocation d-flex justify-content-between align-items-center border-bottom pt-3 pb-4">
                  <div className="HomeTest">
                    <p className="m-0 fSize-3 fw-normal pb-2">
                      Home Test Drive: 
                    </p>
                    <h6 className="m-0 fSize-3 fw-bold">Available</h6>
                  </div>
                  <div className="deliveryCenter">
                    <p className="m-0 fSize-3 fw-normal pb-2">
                      Delivery Center Location 
                    </p>
                    <h6 className="m-0 fSize-3 fw-bold">
                      Carosa Car Hub, , Gurgaon
                    </h6>
                  </div>
                </div>
                {/* <div className="d-flex gap-4 my-3">
                  <div>
                    <div className="">Usage</div>
                    <div className="">{usageMiles} Miles</div>
                  </div>
                  <div>
                    <div className="">Fuel/Type</div>
                    <div className="">{vehicleType}</div>
                  </div>
                  <div>
                    <div className="">Transmission</div>
                    <div className="">{vehicleType}</div>
                  </div>
                </div> */}
                <div className="PriceArea d-flex align-items-center justify-content-between pt-3 pb-4">
                  <div className="roadPrice">
                    <p className="m-0 fSize-2 fw-semibold pb-2">
                      Fixed on road price
                    </p>
                    <h6 className="m-0 fsSize-7-5 fw-semibold">8.93 Lakh</h6>
                    <span className="fSize-2 fw-normal text-black">
                      Includes RC transfer, insurance & more
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-column">
                    <div className="validTill d-flex align-items-center gap-2">
                      <p className="m-0 fSize-2 fw-semibold text-decoration-line-through">
                        ₹ 15,207
                      </p>
                      <div className="fSize-3 fw-normal">
                        {/* EMI{" "} */}
                        <FontAwesomeIcon
                          icon={faIndianRupeeSign}
                          style={{ width: 12, height: 12 }}
                        />{" "}
                        {emi}/m
                      </div>
                    </div>
                    <p className="m-0 fSize-2 fw-normal validParagrapg">
                      Valid till 11th Aug
                    </p>
                  </div>
                </div>
                <div>
                  <div className="getCallBack d-flex justify-content-between align-items-center">
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
                    <div className="bestOffers">
                   <Link
    href={`/make-offer${carIndex !== undefined ? `?carId=${carIndex}` : ""}`}
    prefetch={false}
    onClick={handlePrepareOfferData}
    className="offerHere text-white fSize-2 fw-semibold py-2 px-4 "
  >
    Make Best Offer
  </Link>
                    </div>
                  </div>
                </div>

                {/* <div className="d-flex align-items-end justify-content-between">
                  <div>
                    <div className=" fw-bold fSize-6">{price}</div>
                    <div className=" fSize-2">+ {charges}</div>
                  </div>
                </div>

                <div className="mt-4 d-flex gap-3">
                  <button className="btn btn-primary">Contact Seller</button>
                  <button className="btn btn-outline-light">
                    Add to Wishlist
                  </button>
                </div> */}
                <img
                  src="/images/shihiting.png"
                  alt=""
                  className="crnrImg-sx-th"
                />
              </div>
              <div className="shareFriend mt-4 d-flex align-items-center justify-content-center gap-5 py-2">
                <div>
                  <span className="fSize-2 fw-normal">
                    Share with a friend :
                  </span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <Link href="">
                    <img
                      src="/images/facebookShare.png"
                      alt=""
                      className=""
                      width={20}
                    />
                  </Link>
                  <Link href="">
                    <img src="/images/Xshare.png" alt="" width={20} />
                  </Link>
                  <Link href="">
                    <img src="/images/msgShare.png" alt="" width={20} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* explore car collections  */}
      <ExploreOurFullCollection />
      {/* explore car collections  */}

      {/* stori bharosa  */}
      <Stories />
      {/* stori bharosa  */}

      {/* explore car here  */}
      <MoreExplore />
      {/* explore car here  */}

      {/* assistance  */}
      <AskAssistance />
      {/* assistance  */}
    </>
  );
}
